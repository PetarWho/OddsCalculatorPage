window.addEventListener('load', main);

function main() {
    let inputElement = document.getElementsByClassName('form__field')[0];
    let resultDiv = document.getElementsByClassName('resultDiv')[0];
    let gitHubImgElement = document.getElementById('github-img');

    let fixedNums = 2;
    inputElement.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            if (resultDiv.children[0])
                resultDiv.children[0].remove();
            const regex = /(\d{1,2}(\.\d{1,})?\%)/gm;
            try{
                let arr = inputElement.value.match(regex);
                arr = arr.map(x => x.replace('%', ''));
                var result = arr.reduce((prev, current) => Number(prev) + Number(current), initial = 0)
            let h2El = document.createElement('h2');
            h2El.setAttribute("class", 'result-text')
            h2El.textContent = `${result.toFixed(fixedNums)}% | ${(100-result).toFixed(fixedNums)}%`;
            resultDiv.appendChild(h2El);
            if (resultDiv.children[1] == h2El) {
                resultDiv.removeChild(h2El);
            }
        }
        catch {
            alert("Enter a number with the symbol \"%\" after it!");
        }
            inputElement.value = '';
        }
    })

    gitHubImgElement.addEventListener('click', function () {
        window.location.href = "https://github.com/PetarWho";
    })
}