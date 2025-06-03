let firstName = "Lora";
export { firstName };

export let lastName = "Paro";

export function printFullName() {
  console.log(`${lastName}, ${firstName}`);
}

export function setFirstName(name) {
  firstName = name;
}

export default function signIn() {
  console.log(`Signing in user ${firstName}`);
}
