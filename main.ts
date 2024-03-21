

let Guest_list :string[] =['kamran tassori','Daniyal nagori','Zia khan'];
//for(let i=0; i<Guest_list.length; i++){

//console.log('Dear Mr.' + Guest_list[i] +',\n\nIt is our pleasure to you in our party.\n\nThank you!\n\n')

//}

let absent_Guest :string = 'Daniyal nagori';
let new_Guest :string = 'Ameen alam';
Guest_list[0] = new_Guest;

//for(let i=0; i<Guest_list.length; i++){

//console.log('Dear Mr.' + Guest_list[i] +',\n\nIt is our pleasure to you in our party.\n\nThank you!\n\n')

//}

console.log(`Mr. ${'absant_Guest'} is not coming to the party.`);
console.log('Good News!We  find Big Table so  we are invte 3 more Guest_list.')

Guest_list.unshift('Hamza syed');
Guest_list.splice(2,0,'Qasim');
Guest_list.push('Imran ali');

for(let i=0; i<Guest_list.length; i++){

console.log('Dear Mr.' +Guest_list[i] +',\n\nIt is our pleasure to you in our party.\n\nThank you!\n\n')

}

console.log('sorry we can not arrange big table,Only two people will be invited.')

while(Guest_list.length > 2){
    let romove_Guest = Guest_list.pop()
    console.log(`Sorry Mr. ${'remove_Guest'},You are not invited for Dinner.`);  
}

for(let i=0; i<Guest_list.length; i++){
console.log('Dear Mr.' + Guest_list[i] +',\n\nYou are still invited.\n\nThank you!/n/n')
}

Guest_list.splice(0 ,2);

console.log(Guest_list);