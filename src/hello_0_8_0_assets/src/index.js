import { hello_0_8_0 } from "../../declarations/hello_0_8_0";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hello_0_8_0 actor, calling the greet method
  const greeting = await hello_0_8_0.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
