export const lang_uk = {
  langISO: "UK",
  langName: "Ukrainian",
  variants: [
    {
      variantISO: "UA",
      variantName: "Ukraine",
      strings: {
        app: {
          title: "Wordle",
          snark: "Зроблено не New York Times",
          headerButtons: {
            settings: "Вподобання",
          },
          settings: {
            title: "Вподобання",
            section: {
              accessibility: "Інвалідність",
              interface: "Дизайн",
            },
            setting: {
              language: {
                name: "Мову",
                description: "Мова інтерфейсу",
              },
              highContrast: {
                name: "Високий контраст",
                description: "Збільште плитки контрастність",
              },
            },
          },
        },
        game: {
          endscreen: {
            thewordwas: "СЛОВО БУЛО",
            nextWordleTime: "Наступне слово",
            buttonLabels: {
              faliuremanagement: "Управління помилками",
              spamtwitter: "Спам у Твіттері",
            },
            success: {
              titles: ["Чудово!", "Ви вирішили слово в", "Геній!"],
              subtitle: "Натисніть кнопку, щоб поділитись словом",
              subtitleMarkLater: [
                "one go!",
                "two goes!",
                "three goes!",
                "four goes!",
                "five goes!",
                "six goes!",
              ],
              sharePromptText: [
                "Be a show-off",
                "Share off your score",
                "Become part of the twitter craze",
              ],
            },
            almost: {
              titles: [
                "Close!",
                "Almost there!",
                "Nearly there!",
                "Not quite!",
              ],
              subtitle: "You attempted today's wordle ",
              subtitleMarkLater: [
                "onece!",
                "twice!",
                "three times!",
                "four times!",
                "five times!",
                "six times!",
              ],
              sharePromptText: [
                "Spam it everywhere",
                "Share your accomplishments",
              ],
            },
            faliure: {
              titles: ["Faliure"],
              subtitle:
                "You didn't find today's wordle, and are now being reported to faliure management.",
              subtitleMarkLater: [
                "Try again tomorrow.",
                "Try again tomorrow.",
                "Try again tomorrow.",
                "Try again tomorrow.",
                "Try again tomorrow.",
                "Try again tomorrow.",
              ],
              sharePromptText: ["Get roasted on twitter", "Share the failure"],
            },
          },
        },
      },
    },
  ],
};
