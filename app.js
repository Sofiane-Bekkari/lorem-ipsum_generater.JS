// lorem ipsum array
const parg = [
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna urna, bibendum sed rhoncus in, tempus vel risus. Sed sagittis, lorem semper egestas sollicitudin, Quisque tincidunt sem in justo cursus porttitor. Pellentesque felis mi, posuere vel tristique pellentesque, auctor sed augue. Aliquam tincidunt volutpat lorem et viverra. Duis luctus enim in tincidunt mollis. Mauris mi lectus, suscipit at tincidunt non, pretium eget mauris. Aliquam consectetur nisl non neque blandit, nec consectetur dui laoreet. Proin convallis cursus sapien, in consectetur nibh ornare efficitur.",
"Aliquam pellentesque vulputate augue nec ultrices. Nulla quis ex turpis. Sed ligula lacus, mattis nec velit ac, cursus condimentum risus. Proin tincidunt massa vel dui maximus, non fermentum tortor fringilla. Proin non laoreet nisl. Vivamus vitae nisi quis lectus ultricies pulvinar sit amet nec dolor. Donec id rhoncus elit. Aliquam congue mollis porttitor. Vestibulum hendrerit scelerisque felis, eu sollicitudin libero. Duis suscipit turpis sed tempus elementum. In hac habitasse platea dictumst. Morbi tellus magna, sodales quis fermentum eget, tempor sit amet dolor.",
"Proin mattis ligula a lorem porttitor venenatis. Phasellus pretium neque velit, id ullamcorper enim luctus vitae. Nulla volutpat euismod massa at imperdiet. Pellentesque ultrices faucibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec tempus augue. Donec dapibus nisl at ullamcorper auctor. Aliquam neque felis, malesuada vitae est ac, porttitor hendrerit ex. Fusce id eros non libero consequat dapibus id at felis. Sed et malesuada urna, nec fermentum lacus.",

"Donec pellentesque ipsum sit amet massa pharetra, eget consectetur elit finibus. Maecenas dignissim elit at convallis vulputate. Pellentesque porttitor auctor maximus. Suspendisse scelerisque at ligula eget ornare. Phasellus non vestibulum felis. Fusce auctor efficitur ex in eleifend. Phasellus ipsum est, finibus non ipsum vitae, mollis aliquam orci.",

"Sed egestas, neque ac tincidunt tincidunt, turpis ex lacinia arcu, ut ultrices nisl est vel orci. Aenean tincidunt velit velit, nec porta diam suscipit ac. Donec neque metus, luctus eu arcu a, dignissim lacinia nisl. Nulla sed pretium leo. Duis faucibus viverra efficitur. Nulla luctus luctus venenatis. Donec finibus nisl ut neque lobortis luctus. Nullam sit amet ornare ipsum.",
"Sed in mollis sem. Vivamus non placerat purus. Curabitur ullamcorper ut velit eu rhoncus. Aliquam sed ligula laoreet, molestie ipsum ac, luctus erat. Curabitur laoreet, magna ac semper faucibus, nisl ipsum condimentum nibh, nec dignissim erat lacus vitae dolor. Integer aliquet lobortis turpis sit amet commodo. Nulla facilisi. Maecenas sed viverra sem. Aenean ut velit in mauris convallis placerat eu non mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc dictum, mauris eget scelerisque luctus, justo est faucibus erat, sed interdum magna eros non sapien. Suspendisse eget mauris felis.",
"Proin id tellus ut ipsum imperdiet pharetra at a nibh. Aenean sit amet eros in ipsum aliquet scelerisque ut at tellus. Sed fermentum lobortis nisl vel suscipit. Phasellus at justo gravida, eleifend lectus nec, semper nulla. Sed sapien odio, porttitor non nibh sed, vehicula facilisis eros. Nam ex magna, maximus id placerat ut, cursus sit amet velit. Aliquam erat volutpat. Mauris ultrices ligula at purus lobortis, in interdum risus sollicitudin. Pellentesque non arcu elit. Suspendisse leo turpis, dictum nec aliquam sed, tempor a turpis. Curabitur ac iaculis leo, et mattis purus. Vestibulum ultricies auctor egestas.",
"In ornare in velit ut ornare. Integer sagittis tincidunt nunc, vitae blandit leo euismod a. Mauris et aliquam erat. Suspendisse eget viverra dui. Ut molestie, tellus vel bibendum fermentum, lacus eros pulvinar metus, quis gravida nisl tellus sed est. Morbi at lorem vel neque molestie sodales at eu leo. Sed id orci rhoncus, posuere libero sed, hendrerit libero. Maecenas sollicitudin lectus eget ex sollicitudin fringilla. Vivamus ac metus leo. Nam vitae purus eu nisi vehicula pellentesque. Vivamus vulputate nibh vel pretium ornare.",
"Donec rutrum, elit in vestibulum efficitur, est felis dapibus dolor, sit amet consectetur libero sem vel ante. Mauris tempus massa a velit rutrum, non dignissim sem mollis. Morbi ex ante, tempor id gravida non, lobortis eu lorem. Vivamus vitae neque pretium, luctus sem vitae, feugiat dui. Etiam semper faucibus luctus. Phasellus rutrum, velit et ultrices vestibulum, ligula eros porttitor magna, eget venenatis tellus lectus finibus nulla. Suspendisse potenti."
];

// main variable
const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

// add event to the form
form.addEventListener('submit', function(e){
    e.preventDefault();
    // ivoc parseInt to get integer
    const value = parseInt(amount.value);
    // random index for parg array
    const random = Math.floor(Math.random() * parg.length);

    //console.log(value);
    //console.log(isNaN(value));

    //empty
    // -1
    // >9
    if (isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = `<p class="text">${parg[random]}</p>`
    }
    else {
        // show based on number 1 to 9
        let showParagraph = parg.slice(0,value);
        //console.log(showParagraph);
        
        // use MAP function
        showParagraph = showParagraph.map(function (item){
            return `<p class="text">${item}</p>`;

            // join method
        }).join("")
        console.log(showParagraph);
        result.innerHTML = showParagraph;
    }

    
});