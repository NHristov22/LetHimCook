let stars = document.getElementsByClassName("star");
let outputRaiting = document.getElementById("outputRating");

function setRating(n)
{
    rem();

    for (let i = 0; i < n; i++)
    {
        if (n == 1)
            clas = "one";
        else
        {
            if (n == 2)
                clas = "two";
            else
            {
                if (n == 3)
                    clas = "three";
                else
                {
                    if (n == 4)
                        clas = "four";
                    else
                    {
                        if (n == 5)
                            clas = "five";
                    }
                }
            }
        }

        stars[i].className = "star " + clas;
    }

    outputRaiting.innerText = n + " / 5";
}

function rem()
{
    for (let i = 0; i < 5; i++)
    {
        stars[i].className = "star";
    }
}
