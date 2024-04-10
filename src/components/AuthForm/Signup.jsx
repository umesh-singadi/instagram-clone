import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Signup() {
  const [inputs, setInputs] = useState({
    email: "",
    userName: "",
    fullName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        placeholder="Email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        type="email"
        fontSize={14}
        size={"sm"}
      />
      <Input
        placeholder="Username"
        value={inputs.userName}
        onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
        type="text"
        fontSize={14}
        size={"sm"}
      />
      <Input
        placeholder="Full name"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        type="text"
        fontSize={14}
        size={"sm"}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            p={0}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Sign up
      </Button>
    </>
  );
}

export default Signup;
