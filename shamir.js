const fs = require('fs');

// Function to decode a value from a given base to decimal
function decodeValue(base, value) {
    return parseInt(value, base);
}

// Function to perform Lagrange interpolation and find the constant term
function lagrangeInterpolation(points, k) {
    let result = 0;

    for (let i = 0; i < k; i++) {
        let xi = points[i][0];
        let yi = points[i][1];

        let li = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j][0];
                li *= (0 - xj) / (xi - xj);
            }
        }
        result += li * yi;
    }

    return Math.round(result); // Return the constant term 'c'
}

// Main function to read input and calculate the constant term
function main() {
    try {
        // Reading and parsing JSON input file
        const input1 = JSON.parse(fs.readFileSync('./testcase1.json', 'utf-8'));
        const input2 = JSON.parse(fs.readFileSync('./testcase2.json', 'utf-8'));

        // Helper function to parse the test cases
        function processInput(input) {
            const { n, k } = input.keys; // Extract 'n' and 'k'
            const points = [];

            // Decode the provided roots
            for (let key in input) {
                if (key !== "keys") {
                    const x = parseInt(key, 10); // Key is 'x'
                    const base = parseInt(input[key].base, 10);
                    const value = input[key].value;

                    const y = decodeValue(base, value); // Decode 'y'
                    points.push([x, y]); // Push the (x, y) pair
                }
            }

            // Perform Lagrange interpolation
            return lagrangeInterpolation(points, k);
        }

        // Process both test cases
        const result1 = processInput(input1);
        const result2 = processInput(input2);

        // Print the results
        console.log("Test Case 1 Constant:", result1);
        console.log("Test Case 2 Constant:", result2);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

main();