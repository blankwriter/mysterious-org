// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

let pAequorFactory = (num, dnaBases) => {
  return {
    specimenNum: num,
    dna: dnaBases,
    mutate(){
      let i = Math.floor(Math.random() * this.dna.length);

// target base letter
      let oldBase = this.dna[i];

// mutating base on DNA
      let otherBases = ['A', 'T', 'C', 'G'];
      otherBases.splice(otherBases.indexOf(oldBase), 1); 
// find and remove target base
      let mutatedBase = otherBases[Math.floor(Math.random() * 3)]; 
      return this.dna.splice(i, 1, mutatedBase);
    },

    willLikelySurvive() {
      let cOrG = this.dna.filter(letter => letter === 'C' || letter === 'G');

      if (cOrG.length/this.dna.length > 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
}

  // 30 instances of pAequor
let instance = [];
let i = 0;
while (instance.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() == true) {
    sample.push(temp);
    i += 1
  }
}







