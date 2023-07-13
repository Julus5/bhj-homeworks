const getHole = (index) => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
	let hole = getHole(i);
	hole.onclick = function () {
		if (hole.classList.contains('hole_has-mole')) {
			dead.textContent++;
		} else {
			lost.textContent++;
		}

		if (dead.textContent >= 10) {
			alert('Победа!');
            location.reload();
		} else if (lost.textContent >= 5) {
			alert('Вы проиграли!');
            location.reload();
		}
	}
}	
