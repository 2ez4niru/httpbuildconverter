function convertToQuery() {
    var input = document.getElementById('inputData').value;
    var lines = input.split('\n');
    var result = lines.map(function(line) {
        var parts = line.split('=');
        if (parts.length === 2) {
            var key = parts[0].trim();
            var value = parts[1].trim();
            return "'" + key + "' => '" + value.replace(/'/g, "\\'") + "',";
        }
        return null;
    }).filter(Boolean).join('\n');

    document.getElementById('outputData').textContent = result;
}

function copyToClipboard() {
    var outputData = document.getElementById('outputData');
    navigator.clipboard.writeText(outputData.textContent).then(function() {
        alert('Copying to clipboard was successful!');
    }, function(err) {
        alert('Could not copy text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var outputData = document.getElementById('outputData');
    outputData.addEventListener('click', function() {
        copyToClipboard();
    });
});