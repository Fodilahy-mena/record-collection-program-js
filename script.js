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

const menuStringList = `Choose from these options:
1: Show all the records in the collection
2: Add a new record
3: Update a specific record
4: Remove an existiong record
5: Quit the program`;

let menuOptionForUser = Number(prompt(menuStringList));
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

while (menuOptionForUser !== 5) {
    switch (menuOptionForUser) {
        case 1:
            myRecordList();
            break;
        default:
		alert('Please enter a correct choice from 1,2,3,4 or 5');
    }
    menuOptionForUser = Number(prompt(menuStringList));// reask user to choose frome the menu option
}
alert('Thank you for visiting my record collection program today');