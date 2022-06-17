/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('');
for(let i = 0; i< ransomNote.length; i++){
    const index = magazine.indexOf(ransomNote[i]);
    if(index == -1){
        return false;
    } else {
        magazine.splice(index, 1);
    }
}

return true;
};
