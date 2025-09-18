/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

const shirtWidth = 28;
const shirtLength = 34;
const shirtSleeve = 10.13;

if (shirtWidth === 18 && shirtLength === 28 && shirtSleeve === 8.13) {
    console.log("S");
} else if (shirtWidth === 20 && shirtLength === 29 && shirtSleeve === 8.38) {
    console.log("M");
} else if (shirtWidth === 22 && shirtLength === 30 && shirtSleeve === 8.63) {
    console.log("L");
} else if (shirtWidth === 24 && shirtLength === 31 && shirtSleeve === 8.88) {
    console.log("XL");
} else if (shirtWidth === 26 && shirtLength === 33 && shirtSleeve === 9.63) {
    console.log("2XL");
} else if (shirtWidth === 28 && shirtLength === 34 && shirtSleeve === 10.13) {
    console.log("3XL");
} else {
    console.log("NA");
}