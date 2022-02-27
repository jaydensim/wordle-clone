import { defineStore } from "pinia";
import { acceptedWords, WODs, specialWords } from "../utils/words";
import { getTodayWord } from "../utils/utils";

import GameBoardEndModal from "../components/GameBoardEndModal.vue";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    focused: false,
    locale: {
      wordList: [acceptedWords, WODs, specialWords],
      keyList: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      wordOfTheDay: getTodayWord(),
    },
    currentBoard: [
      [
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
      ],
      [
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
      ],
      [
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
      ],
      [
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
      ],
      [
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
      ],
      [
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
      ],
    ],
    rowStatus: [
      "⬜⬜⬜⬜⬜",
      "⬜⬜⬜⬜⬜",
      "⬜⬜⬜⬜⬜",
      "⬜⬜⬜⬜⬜",
      "⬜⬜⬜⬜⬜",
      "⬜⬜⬜⬜⬜",
    ],
    gameTickerIncrement: 0,
    currentPosition: [0, 0],
    currentBoardGeneratedEmojiTile: "",
    ui: {
      isModalOpen: false,
      modalCurrentView: null,
    },
    dumbass: true,
    donaldtrump: true,
    gameStatus: {
      status: "inprogress",
      result: "unknown",
    },
  }),
  actions: {
    registerletter(letter) {
      this.currentBoard[this.currentPosition[0]][
        this.currentPosition[1]
      ].letter = letter.toUpperCase();

      this.currentBoard[this.currentPosition[0]][
        this.currentPosition[1]
      ].status = "";

      if (this.currentPosition[1] < 4) {
        this.currentPosition[1]++;
      }
    },
    registerBackspace() {
      this.currentBoard[this.currentPosition[0]][
        this.currentPosition[1]
      ].letter = "";
      if (this.currentPosition[1] == 0) {
        null;
      } else {
        this.currentPosition[1]--;
        this.currentBoard[this.currentPosition[0]][
          this.currentPosition[1]
        ].letter = "";
      }
    },
    checkWordProgression() {
      if (
        this.currentPosition[1] == 4 &&
        this.currentBoard[this.currentPosition[0]][4].letter !== ""
      ) {
        let assembledWord = "";
        this.currentBoard[this.currentPosition[0]].forEach((letter) => {
          assembledWord += letter.letter;
        });
        console.log(assembledWord);
        if (
          this.locale.wordList[0].includes(assembledWord.toLowerCase()) ||
          this.locale.wordList[1].includes(assembledWord.toLowerCase()) ||
          this.locale.wordList[2].includes(assembledWord.toLowerCase())
        ) {
          let WordScores = [0, 0, 0];
          let emojis = ["🟩", "🟨", "⬜"];
          let emojiScore = "";
          this.currentBoard[this.currentPosition[0]].forEach(
            (letter, index) => {
              let curPos = this.currentPosition[0];
              if (
                this.locale.wordOfTheDay.split("")[index] ==
                letter.letter.toLowerCase()
              ) {
                this.currentBoard[curPos][index].status = "correctPosition";
                WordScores[0]++;
                emojiScore += emojis[0];
              } else if (
                this.locale.wordOfTheDay.includes(letter.letter.toLowerCase())
              ) {
                this.currentBoard[curPos][index].status = "correctLetter";
                WordScores[1]++;
                emojiScore += emojis[1];
              } else {
                this.currentBoard[curPos][index].status = "inactive";
                WordScores[2]++;
                emojiScore += emojis[2];
              }
            }
          );
          this.rowStatus[this.currentPosition[0]] = emojiScore;
          this.gameTickerIncrement++;
          if (this.gameTickerIncrement == 6) {
            this.gameEnder();
          } else if (WordScores[0] == 5) {
            this.dumbass = false;
            this.donaldtrump = false;
            this.gameEnder();
          } else if (WordScores[2] == 5) {
            this.currentPosition[0]++;
            this.currentPosition[1] = 0;
          } else {
            this.donaldtrump = false;
            this.currentPosition[0]++;
            this.currentPosition[1] = 0;
          }
        } else {
          this.currentBoard[this.currentPosition[0]].forEach(
            (letter, index) => {
              this.currentBoard[this.currentPosition[0]][index].status =
                "incorrect";
            }
          );
          this.currentPosition[0];
          this.currentPosition[1] = 0;
        }
      }
    },
    moveCaret(dir) {
      this.currentPosition[1] = Math.min(
        Math.max(this.currentPosition[1] + dir, 0),
        4
      );
    },
    gameEnder() {
      let generatedTiles = this.rowStatus.join("\n");
      this.currentBoardGeneratedEmojiTile = generatedTiles;
      this.ui.modalCurrentView = GameBoardEndModal;
      this.gameStatus.status = "ended";
      this.gameStatus.result = "success";
      if (this.dumbass == false && this.donaldtrump == false)
        this.gameStatus.result = "success";
      if (this.dumbass == true && this.donaldtrump == true)
        this.gameStatus.result = "faliure";
      if (this.dumbass == true && this.donaldtrump == false)
        this.gameStatus.result = "almost";
      console.log(
        generatedTiles,
        this.gameTickerIncrement,
        this.gameStatus.result
      );
      this.ui.isModalOpen = true;
    },
  },
  persistedState: {
    persist: false,
  },
});
