const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];

let delay = 100;

for (let i = 0; i < spin.length; i++) {
	// console.log(i, delay);
	setTimeout(() => {
		process.stdout.write(`\r${spin[i]}    `);
	}, delay);
	delay += 200;
}
