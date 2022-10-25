"use strict";

if (localStorage.currentItemClass == undefined && localStorage.currentGameItemSize == undefined && localStorage.currentMatrix == undefined && localStorage.currentMoves == undefined && localStorage.currentTime == undefined && localStorage.localStorage == undefined) {
	let matrixIn = [];
	let moveCountIn = 0;
	let timeStartIn = 0;
	let soundIn;

	if (localStorage.currentSound == undefined) {
		soundIn = localStorage.setItem('currentSound', 'none');
		soundIn = 'none';
	}

	if (localStorage.itemClass == undefined) {
		let itemClassLS = localStorage.setItem('itemClass', 'item4');
		if (localStorage.gameItemSize == undefined) {
			let gameItemSizeLS = localStorage.setItem('gameItemSize', 4);
			game(matrixIn, moveCountIn, timeStartIn, soundIn);
		}
	}
	else {
		game(matrixIn, moveCountIn, timeStartIn, soundIn);
	}
}
else {
	localStorage.setItem('itemClass', localStorage.currentItemClass);
	localStorage.setItem('gameItemSize', localStorage.currentGameItemSize);
	let matrixIn = [];
	let arrayMatrix = localStorage.currentMatrix.split('|');
	for (let matrixItem = 0; matrixItem < arrayMatrix.length - 1; matrixItem++) {
		matrixIn.push(Number(arrayMatrix[matrixItem]));
	};

	let moveCountIn = Number(localStorage.currentMoves);
	let timeStartIn = Number(localStorage.getItem('currentTime'));
	let soundIn = localStorage.currentSound;
	game(matrixIn, moveCountIn, timeStartIn, soundIn);
}

// -------------------------------------------------------------------------------------------

function game(matrix, moveCount, timeStart, soundSt) {

	let gameNmb;

	if (localStorage.gameNumber == undefined || localStorage.gameNumber == NaN || localStorage.gameNumber == null) {
		gameNmb = 0;
	}
	else {
		gameNmb = Number(localStorage.getItem('gameNumber'));
	}

	startTimeCount();

	const body = document.querySelector('body');
	const content = document.createElement('div');
	const contentHeader = document.createElement('div');
	const contentBody = document.createElement('div');
	const footer = document.createElement('div');

	const start = document.createElement('a');
	const stop = document.createElement('a');
	const save = document.createElement('a');
	const results = document.createElement('a');

	const sound__after = document.createElement('div');
	const moves = document.createElement('div');
	const time = document.createElement('time');
	const audio = document.createElement('audio');
	const sound = document.createElement('div');

	body.prepend(content);
	content.classList.add('content');
	content.append(contentHeader);
	contentHeader.classList.add('contentHeader');
	contentHeader.id = "contentHeader";

	contentHeader.append(start);
	contentHeader.append(stop);
	contentHeader.append(save);
	contentHeader.append(results);
	start.classList.add('button', 'start');
	start.innerHTML = 'Shuffle and start';
	stop.classList.add('button', 'stop');
	stop.innerHTML = 'Stop';
	save.classList.add('button', 'save');
	save.innerHTML = 'Save';
	results.classList.add('button', 'results');
	results.innerHTML = 'Results';

	start.setAttribute('href', '#');
	stop.setAttribute('href', '#');
	save.setAttribute('href', '#');
	results.setAttribute('href', '#');

	contentHeader.append(moves);
	contentHeader.append(time);
	contentHeader.append(audio);
	audio.classList.add('audio');
	audio.setAttribute('src', "assets/audio/cj_sound_1.wav");
	contentHeader.append(sound);
	sound.after(sound__after);
	sound.classList.add('sound');
	sound__after.classList.add('sound__after');
	sound__after.style.cssText = `
	display: ${soundSt}`;

	sound.insertAdjacentHTML(
		'afterbegin',
		`<img src="assets/img/sound.png" alt="">`
	);

	moves.classList.add('moves');
	moves.innerHTML = 'Moves: ' + `${moveCount}`;
	moves.setAttribute('value', '#');
	time.classList.add('time');

	// -------------------------------------------------------------------------------

	let minutes;
	let seconds;
	function getTimeFormat() {
		seconds = timeStart - ((Math.floor(timeStart / 60)) * 60);
		minutes = Math.floor(timeStart / 60);
		if (seconds < 10) {
			seconds = "0" + String(seconds);
		}
		if (minutes < 10) {
			minutes = "0" + String(minutes);
		}
		time.innerHTML = 'Time: ' + `${minutes}` + ':' + `${seconds}`;
	};


	// --------------------------------------------------------------------------------------

	getTimeFormat();

	let itemClass = localStorage.itemClass;
	let gameItemSize = Number(localStorage.gameItemSize);
	content.append(contentBody);
	contentBody.classList.add('contentBody');
	content.append(footer);
	footer.classList.add('footer');
	footer.insertAdjacentHTML(
		'afterbegin',
		`<p>Frame size: ${gameItemSize}x${gameItemSize}</p>
		<p class="frame__size">
			Other sizes: <a href="#" class="3" id="3">3x3</a> <a href="#" class="4" id="4">4x4</a> <a href="#" class="5" id="5">5x5</a> <a href="#" class="6" id="6">6x6</a> <a href="#" class="7" id="7">7x7</a> <a href="#"class="8" id="8">8x8</a>
		</p>`
	);
	// ---------------------------------------------------------------------------------

	const popup = document.createElement('div');
	const popupBody = document.createElement('div');
	const popupContent = document.createElement('div');
	const popupX = document.createElement('a');
	popupX.setAttribute('href', '#contentHeader');
	const popupText = document.createElement('div');

	content.after(popup);
	popup.classList.add('popup');
	popup.id = "popup";

	popup.append(popupBody);
	popupBody.classList.add('popup__body');
	popupBody.append(popupContent);
	popupContent.classList.add('popup__content');
	popupContent.append(popupX);
	popupX.classList.add('popup__close', 'close');
	popupX.innerHTML = 'X';
	popupContent.append(popupText);
	popupText.classList.add('popup__text');



	popupX.addEventListener('click', function (event) {
		popup.classList.remove('open');
		popupContent.classList.remove('open');
		window.location.reload();
	});

	popup.addEventListener('click', function (event) {
		if (!event.target.closest('.popup__content')) {
			event.target.closest('.popup');
			popup.classList.remove('open');
			window.location.reload();
		}
	});

	// -------------------------------------------------------------------------------

	function setFormatedTimeToResultsList(myTime) {

		let secondsForm = myTime - ((Math.floor(myTime / 60)) * 60);
		let minutesForm = Math.floor(myTime / 60);
		if (secondsForm < 10) {
			secondsForm = "0" + String(secondsForm);
		}
		if (minutesForm < 10) {
			minutesForm = "0" + String(minutesForm);
		}
		let timeResult = minutesForm + ':' + secondsForm;
		return timeResult
	};

	// --------------------------------------------------------------------------------------

	const popupResults = document.createElement('div');
	const winBody = document.createElement('div');
	const winContent = document.createElement('div');
	const winX = document.createElement('div');
	const winTitle = document.createElement('div');
	const rowName = document.createElement('div');

	popup.after(popupResults);
	popupResults.classList.add('popup__results');
	popupResults.append(winBody);
	winBody.classList.add('win__body');
	winBody.append(winContent);
	winContent.classList.add('win__content');
	winTitle.classList.add('win__title');
	winTitle.innerHTML = 'Results Top 10';
	winContent.append(winX);
	winX.classList.add('popup__close');
	winContent.append(winTitle);
	winX.innerHTML = 'X';

	let gameIndex;
	if (gameNmb - 10 < 0) {
		gameIndex = 0;
	}
	else {
		gameIndex = gameNmb - 10;
	};

	// -----------------------------------------------------
		
	function topTenResults() {
		let originalObj_duration = [];
		for (let x = 0 + 1; x < gameNmb + 1; x++) {
			originalObj_duration.push(Number(localStorage.getItem('winDuration_' + String(x))));
		}
		let changedObj_duration = originalObj_duration.concat();
		changedObj_duration.sort((a, b) => { return a - b; });

		let markResultsObject = {};
		for (let p = 0; p < originalObj_duration.length; p++) {
			let mark = changedObj_duration.indexOf(originalObj_duration[p]) + 1;
			markResultsObject[mark] = String(p + 1);
		}
		return markResultsObject
	};

	// -----------------------------------------------------

	const top_ten_results_object = topTenResults();
	let position = 0;

	const dataWinName = document.createElement('div');
	const movesWinName = document.createElement('div');
	const durationWinName = document.createElement('div');
	const positionWinName = document.createElement('div');


	winContent.append(rowName);
	rowName.classList.add('row');

	rowName.prepend(dataWinName);
	dataWinName.classList.add('row__item', 'data__win_name');
	dataWinName.innerHTML = 'Date & Time';

	rowName.prepend(movesWinName);
	movesWinName.classList.add('row__item', 'moves__win_name');
	movesWinName.innerHTML = 'Moves';

	rowName.prepend(durationWinName);
	durationWinName.classList.add('row__item', 'duration__win_name');
	durationWinName.innerHTML = 'Duration';

	rowName.prepend(positionWinName);
	positionWinName.classList.add('row__item', 'position__win_name');
	positionWinName.innerHTML = '#';


	for (let i = gameIndex + 1; i < gameNmb + 1; i++) {
		let dateTimeName = 'winDateTime_' + top_ten_results_object[String(i)];
		let moveName = 'winMoves_' + top_ten_results_object[String(i)];
		let gameDurationName = 'winDuration_' + top_ten_results_object[String(i)];
		position = position + 1;

		const row = document.createElement('div');
		const dataWin = document.createElement('div');
		const movesWin = document.createElement('div');
		const durationWin = document.createElement('div');
		const positionWin = document.createElement('div');

		winContent.append(row);
		row.classList.add('row');

		row.prepend(dataWin);
		dataWin.classList.add('row__item', 'data__win');
		dataWin.innerHTML = localStorage.getItem(dateTimeName);

		row.prepend(movesWin);
		movesWin.classList.add('row__item', 'moves__win');
		movesWin.innerHTML = localStorage.getItem(moveName);

		row.prepend(durationWin);
		durationWin.classList.add('row__item', 'duration__win');
		durationWin.innerHTML = setFormatedTimeToResultsList(Number(localStorage.getItem(gameDurationName)));

		row.prepend(positionWin);
		positionWin.classList.add('row__item', 'position__win');
		positionWin.innerHTML = String(position);
	}

	winX.addEventListener('click', function (event) {
		popupResults.classList.remove('open');
		winContent.classList.remove('open');
	});
	popupResults.addEventListener('click', function (event) {
		if (!event.target.closest('.win__content')) {
			event.target.closest('.popup__results');
			popupResults.classList.remove('open');
		}
	});

	// ----------------------------------------------------------------------------

	results.addEventListener('click', function (event) {
		popupResults.classList.add('open');
		winContent.classList.add('open');
	});
	// ----------------------------------------------------------------------------------

	function playAudio() {
		audio.play();
	};

	sound.addEventListener('click', function (event) {

		if (sound__after.style.display == 'none') {
			localStorage.currentSound = 'block';
			sound__after.style.cssText = 'display: block';
		}
		else {
			localStorage.currentSound = 'none';
			sound__after.style.cssText = 'display: none';
		}
	});
	// -----------------------------------------------------------------------------

	function changeSize() {
		let gameItemSize = document.querySelectorAll('.frame__size > a');
		for (let a of gameItemSize) {
			a.addEventListener('click', function (e) {
				removeCurrentSettings();
				localStorage.itemClass = 'item' + a.getAttribute('class');
				localStorage.gameItemSize = a.getAttribute('class');
				window.location.reload();
			});
		}
	}
	changeSize();

	// -----------------------------------------------------------------------------

	function getItems() {
		let mt = [];
		mt = mt.concat(properties.matrix)

		for (let x = 0; x < mt.length; x++) {
			const item = document.createElement('div');
			contentBody.append(item);
			if (mt[x] == 0) {
				item.classList.add('empty', 'item', itemClass);
			}
			else {
				item.classList.add('full', 'item', itemClass);
				item.innerHTML = `${mt[x]}`;
			}
		}
	}

	// -----------------------------------------------------------------------------

	function setMoves() {
		moveCount = moveCount + 1;
		moves.innerHTML = 'Moves: ' + `${moveCount}`;
	}

	// -----------------------------------------------------------------------------

	let timerId;

	function startTimeCount(timerId) {

		function setTime(timerId) {
			timeStart = timeStart + 1
			let seconds = timeStart - ((Math.floor(timeStart / 60)) * 60);
			let minutes = Math.floor(timeStart / 60);
			if (seconds < 10) {
				seconds = "0" + String(seconds)
			}
			if (minutes < 10) {
				minutes = "0" + String(minutes)
			}
			time.innerHTML = 'Time: ' + `${minutes}` + ':' + `${seconds}`;
			time.setAttribute('time', `${minutes}` + `':'` + `${seconds}`);
		}
		timerId = setInterval(() => setTime(timeStart), 1000);
	};

	// -------------------------------------------------------------------------------

	save.addEventListener('click', function (event) {
		let currentMatrix = document.querySelectorAll("." + itemClass);
		let saveMatrixString = '';
		for (let current of currentMatrix) {
			if (current.innerHTML == '') {
				saveMatrixString = saveMatrixString + "0" + '|'
				continue
			}
			else {
				saveMatrixString = saveMatrixString + current.innerHTML + '|'
			}
		}
		localStorage.setItem('currentMatrix', saveMatrixString);
		localStorage.setItem('currentMoves', moveCount);
		localStorage.setItem('currentTime', timeStart);
		let curSound = localStorage.currentSound;
		localStorage.setItem('currentSound', curSound);
		localStorage.setItem('currentItemClass', itemClass);
		localStorage.setItem('currentGameItemSize', gameItemSize);
	})

	// -------------------------------------------------------------------------------

	function removeCurrentSettings() {
		localStorage.removeItem('currentMatrix');
		localStorage.removeItem('currentMoves');
		localStorage.removeItem('currentTime');
		localStorage.removeItem('currentSound');
		localStorage.removeItem('currentItemClass');
		localStorage.removeItem('currentGameItemSize');
	}

	// ------------------------------------------------------------------------------------------

	let properties = {
		"matrix": matrix,
	};
	let nmbResult = Number();
	let startEmptyPosition;

	function setStartMatrix() {

		if (matrix.length == 0) {
			let array = [];
			for (let i = 0; i < (gameItemSize ** 2); i++) {
				array.push(i);
			};
			for (let x = 0; x < (gameItemSize ** 2); x++) {
				let q = Math.floor(Math.random() * array.length);
				properties.matrix.push(array[q])
				array.splice(q, 1)
			};
		};

		startEmptyPosition = properties.matrix.indexOf(0);

		let arr = [];
		let arrayCheck = [];

		for (let nmb of properties.matrix) {
			if (nmb == 0) {
				continue;
			}
			let newNmb = nmb - 1;
			for (let b = 1; b < nmb; b++) {
				if (arrayCheck.includes(b)) {
					newNmb = newNmb - 1;
				}
			}
			arr.push(newNmb);
			arrayCheck.push(nmb);
			nmbResult = nmbResult + newNmb;
		}
		if (gameItemSize % 2 == 0) {
			nmbResult = nmbResult + (Math.floor(startEmptyPosition / gameItemSize) + 1);
			getItems();
			if ((nmbResult % 2 !== 0)) {
				window.location.reload()
				nmbResult = 0;
				play.restart
			}
		}
		else {
			getItems();
			if ((nmbResult % 2 !== 0)) {
				window.location.reload()
				nmbResult = 0;
				play.restart
			}
		}
	};

	// ---------------------------------------------------------------------------------

	function playGame() {
		const methods = {
			"restart": setStartMatrix(properties),
		}
		return methods
	}

	const play = playGame();

	// ------------------------------------------------------------ 

	start.addEventListener('click', function (e) {
		localStorage.removeItem('itemClass');
		localStorage.removeItem('gameItemSize');
		removeCurrentSettings();
		window.location.reload();
	});

	let emptyItem = document.querySelectorAll("." + itemClass);
	let emptyCoord_y;
	let emptyCoord_x;
	let emptyPosition;
	let emptyCloneItem;

	let clickCoord_y;
	let clickCoord_x;
	let notEmptyPosition;
	let notEmptyCloneItem;
	let itemValue;

	for (let iter = 0; iter < emptyItem.length; iter++) {
		if (emptyItem[iter].textContent == "") {
			emptyCoord_y = Math.floor(iter / gameItemSize);
			emptyCoord_x = iter % gameItemSize;
			emptyPosition = iter;
			emptyCloneItem = emptyItem[iter].cloneNode(true);
		};

		emptyItem[iter].addEventListener('click', function (e) {
			if (sound__after.style.display == 'none') {
				playAudio();
			};

			notEmptyPosition = iter;

			clickCoord_y = Math.floor(iter / gameItemSize);
			clickCoord_x = iter % gameItemSize;
			itemValue = emptyItem[iter].textContent

			let itemUp = [emptyCoord_y - 1, emptyCoord_x];
			let itemDown = [emptyCoord_y + 1, emptyCoord_x];
			let itemLeft = [emptyCoord_y, emptyCoord_x - 1];
			let itemRight = [emptyCoord_y, emptyCoord_x + 1];

			let itemZoneArray = [itemUp, itemDown, itemLeft, itemRight];

			let toggleBool = Boolean(false);
			for (let iterNumb of itemZoneArray) {
				if (clickCoord_y == iterNumb[0] && clickCoord_x == iterNumb[1]) {
					setMoves();

					emptyItem[emptyPosition].classList.remove('empty');
					emptyItem[emptyPosition].classList.add('full');
					emptyItem[emptyPosition].innerHTML = `${itemValue} `;

					emptyItem[notEmptyPosition].classList.add('empty');
					emptyItem[notEmptyPosition].classList.remove('full');
					emptyItem[notEmptyPosition].innerHTML = '';

					emptyItem = document.querySelectorAll("." + itemClass);

					let bufferEmptyCoord_y = emptyCoord_y;
					let bufferEmptyCoord_x = emptyCoord_x;
					let bufferEmptyPosition = emptyPosition;
					let bufferEmptyCloneItem = emptyCloneItem;

					emptyCoord_y = clickCoord_y;
					emptyCoord_x = clickCoord_x;
					emptyPosition = notEmptyPosition;
					emptyCloneItem = notEmptyCloneItem;

					clickCoord_y = bufferEmptyCoord_y;
					clickCoord_x = bufferEmptyCoord_x;
					notEmptyPosition = bufferEmptyPosition;
					notEmptyCloneItem = bufferEmptyCloneItem;

					emptyItem = document.querySelectorAll("." + itemClass);
					toggleBool = true;
					let count = [];
					for (let verif = 0; verif < emptyItem.length - 1; verif++) {
						if (Number(emptyItem[verif].textContent) == verif + 1) {
							count.push(true);
						}
					}
					if (count.length < ((gameItemSize ** 2) - 1)) {
						continue
					}

					else {
						let now = new Date();

						let date = now.toString().split(' ')
						let dateResult = '';
						for (let dateItem = 0; dateItem < 4; dateItem++) {
							dateResult = dateResult + date[dateItem] + ' '
						}
						dateResult = dateResult + date[4]

						popupText.innerHTML = `Hooray!<br> You solved the puzzle in ${setFormatedTimeToResultsList(timeStart)} and ${moveCount} moves!`;
						let winMooves = 'winMoves_' + String(gameNmb + 1);
						let winGameDuration = 'winDuration_' + String(gameNmb + 1);
						let winDateTime = 'winDateTime_' + String(gameNmb + 1);

						localStorage.setItem('gameNumber', String(gameNmb + 1));
						localStorage.setItem(winMooves, moveCount);
						localStorage.setItem(winGameDuration, timeStart);
						localStorage.setItem(winDateTime, dateResult);

						popup.classList.add("open");
						popupContent.classList.add("open");
						removeCurrentSettings();
					}
				}
			}
		})
	};
}
