var Guest_list = ['kamran tassori', 'Daniyal nagori', 'Zia khan'];
//for(let i=0; i<Guest_list.length; i++){
//console.log('Dear Mr.' + Guest_list[i] +',\n\nIt is our pleasure to you in our party.\n\nThank you!\n\n')
//}
var absent_Guest = 'Daniyal nagori';
var new_Guest = 'Ameen alam';
Guest_list[0] = new_Guest;
//for(let i=0; i<Guest_list.length; i++){
//console.log('Dear Mr.' + Guest_list[i] +',\n\nIt is our pleasure to you in our party.\n\nThank you!\n\n')
//}
console.log("Mr. ".concat('absant_Guest', " is not coming to the party."));
console.log('Good News!We  find Big Table so  we are invte 3 more Guest_list.');
Guest_list.unshift('Hamza syed');
Guest_list.splice(2, 0, 'Qasim');
Guest_list.push('Imran ali');
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to you in our party.\n\nThank you!\n\n');
}
console.log('sorry we can not arrange big table,Only two people will be invited.');
while (Guest_list.length > 2) {
    var romove_Guest = Guest_list.pop();
    console.log("Sorry Mr. ".concat('remove_Guest', ",You are not invited for Dinner."));
}
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank you!/n/n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
