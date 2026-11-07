// shallow copy

let sallow = {
  name: "abdul wahid",
  city: "karachi"
};

let user = {
  ...sallow
};

sallow.name = "abdul raheem";

console.log(user);
console.log(sallow);
