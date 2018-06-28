/*
1. displays the list
2. add items to list--->Display updated list
3. change/delete list item
*/
var todos= [1," hello","initial variable"];


// 1. displays the list
function DisplayList(){
document.write("Here is a list of your TO DO items:\n" + todos);
}
// 2. add items to list--->Display updated list
function AddItems(item){
todos.push(item);
alert(todos.last + " has been added to your list.\n")
DisplayList();
}
// 3. change/delete list item

function ChangeList(arr){
	var question = prompt(arr +"\nWould you like to delete or change an item? Please answer change or delete.");
	 question=question.toLowerCase();
	if (question=="change"){
		var index = prompt(arr +"\nWhat is the index of the item you would like to change?");
		var change = prompt("What would you like to change it to?");
		arr[index]=change;
		alert("Index " + arr[index] + " has been changed to " + change+ ".");
		DisplayList();


	} else if(question=="delete"){
		var index = prompt(arr +"\nWhat is the index of the item you would like to delete?");
		arr.splice(index,1);
		alert("An item has been deleted from your list.\n");
		DisplayList();

	}

}


ChangeList(todos);