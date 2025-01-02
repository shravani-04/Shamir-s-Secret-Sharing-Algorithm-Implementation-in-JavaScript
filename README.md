# Shamir-s-Secret-Sharing-Algorithm-Implementation-in-JavaScript


Project Overview : 
This project implements a simplified version of Shamir's Secret Sharing algorithm, designed to find the constant term of a polynomial from its roots encoded in different bases. Lagrange Interpolation is used to compute the polynomial's constant term.

Problem Overview :
We are given an unknown polynomial defined by its degree, and the goal is to find the constant term (c) by decoding the roots encoded in various bases (e.g., binary, decimal, hexadecimal). At least k = m + 1 points are required for accurate interpolation.


How the Code Works :
Input Parsing: JSON input is read, which contains the roots.
Decoding Values: Values are decoded using their base.
Lagrange Interpolation: Computes the polynomial's constant term using the decoded roots.

Code Structure :
decodeBaseValue(base, value) – Decodes the y value from a specific base to decimal.
lagrangeInterpolation(points, k) – Calculates the constant term using the Lagrange formula.
findSecretConstant(jsonFilePath) – Reads the JSON input and calculates the constant term

How to Run the Program :
Clone the repository.
Install Node.js.
Run the script with:
node script.js

Dependencies
Node.js

Example Input:
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
Output Format :
The constant term (c) is: 31


