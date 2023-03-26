var input = require('fs').readFileSync('stdin', 'utf8');

var amountDays = parseInt(input);

var amountYears, amountMonths;

amountYears = parseInt(amountDays/365);
amountDays = amountDays%365;

amountMonths = parseInt(amountDays/30);
amountDays = amountDays%30;

var result = `${amountYears} ano(s)
${amountMonths} mes(es)
${amountDays} dia(s)`;

