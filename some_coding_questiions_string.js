
// 1. Write an if-else statement to check if a number is positive, negative or zero
let num = 5;
if (num > 0)
{
    console.log("Positive");
} else if (num < 0)
{
    console.log("Negative");
} else
{
    console.log("Zero");
}

// 2. Check if a person is eligible to vote based on age
let age = 18;
if (age >= 18)
{
    console.log("Eligible to vote");
} else
{
    console.log("Not eligible to vote");
}

// 3. Grade students based on their marks
let marks = 85;
if (marks >= 90)
{
    console.log("Grade A");
} else if (marks >= 80)
{
    console.log("Grade B");
} else if (marks >= 70)
{
    console.log("Grade C");
} else if (marks >= 60)
{
    console.log("Grade D");
} else
{
    console.log("Grade F");
}

// 4. Check if a year is leap year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
{
    console.log("Leap Year");
} else
{
    console.log("Not a Leap Year");
}

// 5. Find the largest among three numbers
let a = 10, b = 20, c = 15;
if (a >= b && a >= c)
{
    console.log(a + " is largest");
} else if (b >= a && b >= c)
{
    console.log(b + " is largest");
} else
{
    console.log(c + " is largest");
}

// 6. Check if a character is vowel or consonant
let char = 'a';
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
{
    console.log("Vowel");
} else
{
    console.log("Consonant");
}

// 7. Determine the day of week using number
let day = 1;
if (day === 1)
{
    console.log("Monday");
} else if (day === 2)
{
    console.log("Tuesday");
} else if (day === 3)
{
    console.log("Wednesday");
} else if (day === 4)
{
    console.log("Thursday");
} else if (day === 5)
{
    console.log("Friday");
} else if (day === 6)
{
    console.log("Saturday");
} else if (day === 7)
{
    console.log("Sunday");
} else
{
    console.log("Invalid day");
}

// 8. Check if a number is even or odd
let number = 6;
if (number % 2 === 0)
{
    console.log("Even");
} else
{
    console.log("Odd");
}

// 9. Calculate income tax based on salary
let salary = 50000;
if (salary <= 25000)
{
    console.log("Tax: 10%");
} else if (salary <= 50000)
{
    console.log("Tax: 20%");
} else if (salary <= 75000)
{
    console.log("Tax: 30%");
} else
{
    console.log("Tax: 40%");
}

// 10. Check if a triangle is equilateral, isosceles or scalene
let side1 = 5, side2 = 5, side3 = 5;
if (side1 === side2 && side2 === side3)
{
    console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3)
{
    console.log("Isosceles Triangle");
} else
{
    console.log("Scalene Triangle");
}

// 11. Check if a person is eligible for discount based on age and membership
let customerAge = 25;
let isMember = true;
if (customerAge >= 60)
{
    console.log("Senior Citizen Discount");
} else if (isMember)
{
    console.log("Member Discount");
} else
{
    console.log("No Discount");
}

// 12. Determine the season based on month
let month = 6;
if (month >= 3 && month <= 5)
{
    console.log("Spring");
} else if (month >= 6 && month <= 8)
{
    console.log("Summer");
} else if (month >= 9 && month <= 11)
{
    console.log("Fall");
} else
{
    console.log("Winter");
}

// 13. Check password strength
let password = "Test123!";
if (password.length < 6)
{
    console.log("Weak Password");
} else if (password.length < 10)
{
    console.log("Medium Password");
} else
{
    console.log("Strong Password");
}

// 14. Calculate shipping cost based on distance
let distance = 100;
if (distance <= 50)
{
    console.log("Shipping Cost: $5");
} else if (distance <= 100)
{
    console.log("Shipping Cost: $10");
} else if (distance <= 200)
{
    console.log("Shipping Cost: $15");
} else
{
    console.log("Shipping Cost: $20");
}

// 15. Determine BMI category
let bmi = 23;
if (bmi < 18.5)
{
    console.log("Underweight");
} else if (bmi < 25)
{
    console.log("Normal");
} else if (bmi < 30)
{
    console.log("Overweight");
} else
{
    console.log("Obese");
}
