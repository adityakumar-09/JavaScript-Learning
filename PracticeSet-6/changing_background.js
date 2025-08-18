const color = prompt("Enter the color you want to show:");
switch (color) {
    case "red":
        document.body.style.background='red';
        break;
    case "blue":
        document.body.style.background='blue';
        break;
    case "green":
        document.body.style.background='green';
        break;
    default:
        document.body.style.background='black';
}