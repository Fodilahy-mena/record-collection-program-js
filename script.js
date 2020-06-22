// Here is my code!
//console.log("This is my work on holiday!");

let recordLists = [
    {
        title: "Music of My Mind",
        artistName: "Stevie Wonder",
        numberOfTracks: 2,
        linkUrl: "https://en.wikipedia.org/wiki/Music_of_My_Mind",
        year: 1972
    },
    {
        title: "Stairway to Heaven",
        artistName: "Led Zeppelin",
        numberOfTracks: 7,
        linkUrl: "https://en.wikipedia.org/wiki/Stairway_to_Heaven",
        year: 1971
    },
    {
        title: "Empty Sky",
        artistName: "Elton John",
        numberOfTracks: 8,
        linkUrl: "https://en.wikipedia.org/wiki/Empty_Sky",
        year: 1969
    },
    {
        title: "The Piper at the Gates of Dawn",
        artistName: "Pink Floyd",
        numberOfTracks: 2,
        linkUrl: "https://en.wikipedia.org/wiki/The_Piper_at_the_Gates_of_Dawn",
        year: 1967
    },
    {
        title: "Let's Get It On",
        artistName: "Marvin Gaye",
        numberOfTracks: 2,
        linkUrl: "https://en.wikipedia.org/wiki/Let%27s_Get_It_On",
        year: 1973
    }
];

// Invent the menu list to provide optional choices

const menuStringList = `Choose from these options:
1: Show all the records in the collection
2: Add a new record
3: Update a specific record
4: Remove an existiong record
5: Quit the program`;

//A strategy to add a new record

const addNewRecord = () => {
    const newTitle = prompt('What is the title of your record?');
    const newArtistName = prompt('What is the name of your artist record?');
    const newNumberOfTracks = prompt('How many tracks incoud in the record?');
    const newLinkUrl = prompt('Entr its social media link url?');
    if (!newLinkUrl.startsWith("http://") && !newLinkUrl.startsWith("https://")) {
        changeThisUrl = `http://${newLinkUrl}`;
    } else {
        changeThisUrl = newLinkUrl;
    }
    const newYear = prompt('When was it released?');
    let enterYourNewRecord = {
        title: newTitle,
        artistName: newArtistName,
        numberOfTracks: newNumberOfTracks,
        linkUrl: changeThisUrl,
        year: newYear
	};
	recordLists.push(enterYourNewRecord);
	return;
}
//The action to show the menu list options
let menuOptionForUser = Number(prompt(menuStringList));

//The function code to iterate inside the recordLists array object
const myRecordList = () => {
    for (let i = 0; i < recordLists.length; i++) {
    let linkString = `Tiltle: ${recordLists[i].title}
Artist name: ${recordLists[i].artistName}
Number of tracks: ${recordLists[i].numberOfTracks}
Social media links: ${recordLists[i].linkUrl}
Release year: ${recordLists[i].year}`;
	alert(linkString);
	}
};


// Technical code to accomplish the program
while (menuOptionForUser !== 5) {
    switch (menuOptionForUser) {
        case 1:
            // The first choice from the menu option
            myRecordList();
            break;
        case 2:
            addNewRecord();
            break;
        default:
            //Show this if the user entered a wrong choice
		alert('Please enter a correct choice from 1,2,3,4 or 5');
    }
    // Ask user again to choose frome the menu option
    menuOptionForUser = Number(prompt(menuStringList));
}
//The output that is given to user if they take an option to quit the program
alert('Thank you for visiting my record collection program today');