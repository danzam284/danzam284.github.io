<!DOCTYPE html>
<html>
<H1>
    Login
</H1>
<h2></h2>
<body>
    <div id="mail">
        email <input type="email" id="email">
    </div>
    <div id="pass">
        password <input type="password" id="password">
    </div>
    <div id="check">
        I am human<input type="checkbox" id="checkbox">
    </div>
    <div id="click">
        <input type="button" value="Submit" id="button" onclick="validate()">
    </div>

    <script>
        function validate() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            if (typeof dic === 'undefined') {
                dic = {};
            }
            var good = true;
            if (document.getElementById("checkbox").checked == false) {
                good = false;
                alert("checkbox not checked");
            }
            if (good) {
                var found = false;
                for (const [key] of Object.entries(dic)) {
                    if (key == email) {
                        found = true;
                    }
                }
                if (found == false) {
                    good = false;
                    alert("email not found");
                }
            }
            if (good && dic[email] != password) {
                good = false;
                alert("incorrect password");
            }
            if (good) {
                alert("you're in mate");
            }
        }
    </script>
</body>
</html>
