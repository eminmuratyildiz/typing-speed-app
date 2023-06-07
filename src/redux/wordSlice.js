import { createSlice } from "@reduxjs/toolkit";
import { words } from "../data/data";

export const wordSlice = createSlice({
  name: "data",
  initialState: {
    words: words.sort(() => Math.random() - 0.5),
    currentWord: "",
    writedWords: [],
    successWords: 0,
    errorWords: 0,
    successLetter: 0,
    errorLetter: 0,
    top: 0,
    wordIndex: 0,
    time: 60,
    start: false,
    finish: false,
  },
  reducers: {
    handleChange: (state, action) => {
      state.currentWord = action.payload;
    },
    checkLetter: (state, action) => {
      state.start = true;
      const splitCurrentWord = state.currentWord.trim().split("");
      const splitWord = state.words[state.writedWords.length].word.split("");
      splitCurrentWord.length === 0 &&
        (state.words[state.writedWords.length].bg = "gray");
      let check = true;
      splitCurrentWord.map((item, key) => {
        if (splitWord[key] !== item) {
          check = false;
        }
        check
          ? (state.words[state.writedWords.length].bg = "gray")
          : (state.words[state.writedWords.length].bg = "red");
        return item;
      });

      if (
        splitWord[splitCurrentWord.length - 1] !==
        splitCurrentWord[splitCurrentWord.length - 1]
      ) {
        state.errorLetter++;
      } else {
        state.successLetter++;
      }
    },
    checkWord: (state) => {
      state.wordIndex++;
      state.writedWords.push(state.currentWord.trim());
      state.currentWord = "";
      if (state.writedWords.length > 0) {
        state.words.map((item, key) => {
          if (state.writedWords.length === key) {
            item.bg = "gray";
          } else {
            item.bg = "";
          }
          return item;
        });
        if (
          state.words[state.writedWords.length - 1].word ===
          state.writedWords[state.writedWords.length - 1]
        ) {
          state.words[state.writedWords.length - 1].color = "green";
          state.successWords += 1;
        } else {
          state.words[state.writedWords.length - 1].color = "red";
          state.errorWords += 1;
        }
      }
    },
    changeTop: (state) => {
      state.top += 52;
    },
    decrementTime: (state) => {
      state.time -= 1;
    },
    timeOver: (state) => {
      state.finish = true;
    },
    restart: (state) => {
      state.finish = false;
      state.start = false;
      const shuffle = [...state.words].sort(() => Math.random() - 0.5);
      state.words = shuffle;
      state.currentWord = "";
      state.successWords = 0;
      state.errorWords = 0;
      state.successLetter = 0;
      state.errorLetter = 0;
      state.time = 60;
      state.top = 0;
      state.writedWords = [];
      state.wordIndex = 0;
      state.words.map((word) => {
        word.bg = "";
        word.color = "";
        return word;
      });
      state.words[0].bg = "gray";
    },
    bgFirst: (state) => {
      state.words[0].bg = "gray";
    },
  },
});

export default wordSlice.reducer;
export const {
  handleChange,
  checkLetter,
  checkWord,
  changeTop,
  decrementTime,
  timeOver,
  restart,
  bgFirst,
} = wordSlice.actions;
