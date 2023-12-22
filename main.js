// main.js

// This script will simulate the batch processing system

// Define the server racks
let serverRacks = document.getElementById('server-racks');

// Define the control panel
let controlPanel = document.getElementById('control-panel');

// Define the data flow
let dataFlow = document.getElementById('data-flow');

// Define the background elements
let backgroundElements = document.getElementById('background-elements');

// Function to simulate data flow
function simulateDataFlow() {
    // Add a class to animate the data flow
    dataFlow.classList.add('animate-data-flow');

    // After the animation is complete, remove the class
    dataFlow.addEventListener('animationend', () => {
        dataFlow.classList.remove('animate-data-flow');
    });
}

// Function to simulate server processing
function simulateServerProcessing() {
    // Add a class to animate the server racks
    serverRacks.classList.add('animate-server-racks');

    // After the animation is complete, remove the class
    serverRacks.addEventListener('animationend', () => {
        serverRacks.classList.remove('animate-server-racks');
    });
}

// Function to simulate control panel interaction
function simulateControlPanelInteraction() {
    // Add a class to animate the control panel
    controlPanel.classList.add('animate-control-panel');

    // After the animation is complete, remove the class
    controlPanel.addEventListener('animationend', () => {
        controlPanel.classList.remove('animate-control-panel');
    });
}

// Function to simulate background elements
function simulateBackgroundElements() {
    // Add a class to animate the background elements
    backgroundElements.classList.add('animate-background-elements');

    // After the animation is complete, remove the class
    backgroundElements.addEventListener('animationend', () => {
        backgroundElements.classList.remove('animate-background-elements');
    });
}

// Call the functions to start the simulation
simulateDataFlow();
simulateServerProcessing();
simulateControlPanelInteraction();
simulateBackgroundElements();
