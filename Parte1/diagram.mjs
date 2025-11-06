const mysql = require('mysql2/promise');
const fs = require('fs');
const { instance } = require('@aduh95/viz.js');

async function gerarDiagrama() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Brun@1506',
      database: 'TechMarket'
    });

    const [tables] = await connection.query(`SHOW TABLES`);
    const dbTables = tables.map(t => Object.values(t)[0]);

    let dot = 'digraph ERD {\n';
    dot += 'rankdir=LR;\nnode [shape=record, style=filled, fillcolor="#e0f2fe", color="#1e3a8a", fontname="Arial"];\n';

    for (const table of dbTables) {
      const [columns] = await connection.query(`SHOW COLUMNS FROM ${table}`);
      let cols = columns.map(col => `<${col.Field}> ${col.Field} : ${col.Type}`).join('|');
      dot += `${table} [label="{${table}|${cols}}"];\n`;
    }

    const [relations] = await connection.query(`
      SELECT 
        TABLE_NAME, COLUMN_NAME, 
        REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME
      FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
      WHERE REFERENCED_TABLE_SCHEMA = 'TechMarket'
        AND REFERENCED_TABLE_NAME IS NOT NULL;
    `);

    for (const rel of relations) {
      dot += `${rel.TABLE_NAME}:${rel.COLUMN_NAME} -> ${rel.REFERENCED_TABLE_NAME}:${rel.REFERENCED_COLUMN_NAME} [color="#0284c7"];\n`;
    }

    dot += '}';

    const viz = instance();
    const svg = await viz.renderString(dot);
    fs.writeFileSync('diagrama_TechMarket.svg', svg);
    console.log('✅ Diagrama gerado com sucesso: diagrama_TechMarket.svg');

    await connection.end();
  } catch (err) {
    console.error('❌ Erro ao gerar diagrama:', err);
  }
}

gerarDiagrama();
