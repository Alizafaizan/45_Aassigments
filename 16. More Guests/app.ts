
 let Guest_list: string[] = ['Imran kahn', 'Ali Muhammad Khan ', 'Hammad Azher', 'Muraad Saeed'];
// for(let i=0; i<Guest_list.length; i++){

//     console.log('Respected Sir. ' +  Guest_list[i] + ',\n\n it is our pleasure to invite you in our get together dinner please come and join us.\n\nThank you!\n\n')
// }
let not_comingGuest = 'Imran Khan';
let new_guest= 'Kamran Tassori';

// replace guest 
Guest_list[0] = new_guest ;

for(let i=0; i<Guest_list.length; i++){
    console.log('Respected Sir. ' +  Guest_list[i] + ',\n\n it is our pleasure to invite you in our get together dinner please come and join us.\nThank you!\n')
}
// not coming this person.
console.log(`Mr.${not_comingGuest} will not coming.\n`);

// Print a new set of invitation messages
console.log('Good Newa! we find big dinner table so we are inviting 3 more guests.\n');

// • Add one new guest to the beginning of your array.
Guest_list.unshift('Zia Khan');

//  Add one new guest to the middle of your array.
Guest_list.splice( 3 , 0 ,'Sehryar khan Afridi');

// Add one new guest to the end of your list.
Guest_list.push('Ali Ameen Gandaapoor');

for(let i=0; i<Guest_list.length; i++){
    console.log('Respected Sir. ' +  Guest_list[i] + ',\n\n it is our pleasure to invite you in our get together dinner please come and join us.\nThank you!\n')
}

