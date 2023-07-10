import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

import Switch from "@mui/material/Switch";
import { useState } from "react";
import Signup from "./Signup";
import Registration from "./Registration";

const Login = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <section class="flex flex-col w-ful mx-auto overflow-hidden items-center bg-white  shadow-lg dark:bg-gray-800 md:flex-row-reverse md:h-[72rem]">
      <img src="" alt="" />{" "}
      <div class="md:flex md:items-center md:justify-center md:w-[60%] h-full md:bg-gray-700 md:dark:bg-gray-800 lg:bg-gradient-secondary  lg:bg-cover lg:bg-center lg:bg-no-repeat" >
        <div class="px-6 py-6 md:px-8 md:py-0">
          <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100 h-80 w-80">
            Sign Up For{" "}
            <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">
              Project
            </span>{" "}
            Updates
          </h2>

          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur obcaecati odio
          </p>
        </div>
      </div>


      <div className="mx-auto p-10 w-[350px] lg:w-[650px]">
        <Paper elevation={3} style={{ padding: "40px", paddingBottom: "50px" }}>
          <div align="center">
            {checked ? (
              <Chip
                icon={<LockIcon />}
                label="Log In"
                variant="outlined"
                color="info"
              />
            ) : (
              <Chip
                icon={<FaceIcon />}
                label="Sign Up"
                variant="outlined"
                color="info"
              />
            )}
            <br />

            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          {checked ? <Signup /> : <Registration />}
        </Paper>
      </div>
    </section>
  );
};

export default Login;
