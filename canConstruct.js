var canConstruct = function(ransomNote, magazine) {
    var ransom = {}

    for(var i=0; i<ransomNote.length; i++){
    	let curr = ransomNote[i]
    	if(ransom[curr]) continue;
    	ransom[curr]= true;
    	let re = new RegExp(curr, 'g')
    	if(!magazine.match(re)||ransomNote.match(re).length>magazine.match(re).length) return false;
    }

    return true;

};

// / Given  an arbitrary  ransom  note  string and another string containing letters from  all the magazines,  write a function that will return true if the ransom  note can be constructed from the magazines ; otherwise, it will return false.  

// Each letter  in  the  magazine string can  only be  used once  in  your ransom  note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true
