// Timer Precision Test Script
// This script tests the accuracy and precision of the stopwatch timing

console.log('Starting Timer Precision Tests...');

// Test 1: Basic timing accuracy
function testTimingAccuracy() {
    console.log('\n=== Test 1: Basic Timing Accuracy ===');
    
    const startTime = performance.now();
    
    setTimeout(() => {
        const endTime = performance.now();
        const actualDuration = endTime - startTime;
        const expectedDuration = 1000; // 1 second
        const accuracy = Math.abs(actualDuration - expectedDuration);
        
        console.log(`Expected duration: ${expectedDuration}ms`);
        console.log(`Actual duration: ${actualDuration.toFixed(2)}ms`);
        console.log(`Accuracy difference: ${accuracy.toFixed(2)}ms`);
        console.log(`Test result: ${accuracy < 50 ? 'PASS' : 'FAIL'} (tolerance: 50ms)`);
    }, 1000);
}

// Test 2: Format time function accuracy
function testFormatTimeFunction() {
    console.log('\n=== Test 2: Time Formatting Function ===');
    
    // Mock the formatTime function from the application
    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const centiseconds = Math.floor((milliseconds % 1000) / 10);
        
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
    }
    
    const testCases = [
        { input: 0, expected: '00:00.00', description: 'Zero time' },
        { input: 500, expected: '00:00.50', description: 'Half second' },
        { input: 1000, expected: '00:01.00', description: 'One second' },
        { input: 1500, expected: '00:01.50', description: 'One and half seconds' },
        { input: 60000, expected: '01:00.00', description: 'One minute' },
        { input: 61500, expected: '01:01.50', description: 'One minute, one and half seconds' },
        { input: 3661500, expected: '61:01.50', description: 'Over one hour' },
        { input: 599990, expected: '09:59.99', description: 'Edge case: 9:59.99' }
    ];
    
    let passedTests = 0;
    
    testCases.forEach((testCase, index) => {
        const result = formatTime(testCase.input);
        const passed = result === testCase.expected;
        
        console.log(`Test ${index + 1}: ${testCase.description}`);
        console.log(`  Input: ${testCase.input}ms`);
        console.log(`  Expected: ${testCase.expected}`);
        console.log(`  Got: ${result}`);
        console.log(`  Result: ${passed ? 'PASS' : 'FAIL'}`);
        
        if (passed) passedTests++;
    });
    
    console.log(`\nFormat Time Tests: ${passedTests}/${testCases.length} passed`);
}

// Test 3: Performance timing precision
function testPerformancePrecision() {
    console.log('\n=== Test 3: Performance.now() Precision ===');
    
    const measurements = [];
    const iterations = 100;
    
    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        // Minimal operation
        const dummy = Math.random();
        const end = performance.now();
        measurements.push(end - start);
    }
    
    const average = measurements.reduce((sum, val) => sum + val, 0) / measurements.length;
    const min = Math.min(...measurements);
    const max = Math.max(...measurements);
    
    console.log(`Measurements taken: ${iterations}`);
    console.log(`Average precision: ${average.toFixed(6)}ms`);
    console.log(`Minimum time: ${min.toFixed(6)}ms`);
    console.log(`Maximum time: ${max.toFixed(6)}ms`);
    console.log(`Precision test: ${average < 1 ? 'PASS' : 'FAIL'} (sub-millisecond precision)`);
}

// Test 4: Message randomness
function testMessageRandomness() {
    console.log('\n=== Test 4: Message Randomness ===');
    
    // Mock message arrays
    const testMessages = [
        "Message 1", "Message 2", "Message 3", "Message 4", "Message 5",
        "Message 6", "Message 7", "Message 8", "Message 9", "Message 10"
    ];
    
    function getRandomMessage(messages) {
        return messages[Math.floor(Math.random() * messages.length)];
    }
    
    const selections = {};
    const iterations = 1000;
    
    // Test randomness by selecting messages many times
    for (let i = 0; i < iterations; i++) {
        const message = getRandomMessage(testMessages);
        selections[message] = (selections[message] || 0) + 1;
    }
    
    console.log('Message distribution over 1000 selections:');
    Object.entries(selections).forEach(([message, count]) => {
        const percentage = (count / iterations * 100).toFixed(1);
        console.log(`  ${message}: ${count} times (${percentage}%)`);
    });
    
    // Check if distribution is reasonably random (each message should appear roughly 10% of the time)
    const expectedPercentage = 100 / testMessages.length;
    const tolerance = 5; // 5% tolerance
    
    let reasonablyRandom = true;
    Object.values(selections).forEach(count => {
        const percentage = (count / iterations * 100);
        if (Math.abs(percentage - expectedPercentage) > tolerance) {
            reasonablyRandom = false;
        }
    });
    
    console.log(`Randomness test: ${reasonablyRandom ? 'PASS' : 'FAIL'} (within ${tolerance}% tolerance)`);
}

// Run all tests
testTimingAccuracy();
testFormatTimeFunction();
testPerformancePrecision();
testMessageRandomness();

console.log('\n=== All Precision Tests Completed ===');
console.log('Check the results above for any failures.');
console.log('For complete testing, also run the manual tests in test-application.html');