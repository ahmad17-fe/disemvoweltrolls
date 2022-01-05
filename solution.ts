class Word {
  private vowels: string = "aiueoAIUEO";

  private isVowel(char: string): boolean {
    return this.vowels.includes(char);
  }

  public disemvowel(str: string): string {
    // str = str.replace(/[aiueoAIUEO]/g, "");
    // return str;
    let wordWithoutVowels: string = "";
    for (let i = 0; i < str.length; i++) {
      if (!this.isVowel(str[i])) {
        wordWithoutVowels += str[i];
      }
    }
    return wordWithoutVowels;
  }
}

export default Word;
