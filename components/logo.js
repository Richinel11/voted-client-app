const Color = {
  primaryColor: "#26C98A",
  secondaryColor: "#000000C0",
  boxBorderDiv: "#0000001C",
  boxBgDiv: "#00000005",
};

let Logo = () => {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let span = document.createElement("span");

  div.appendChild(p);
  div.appendChild(span);

  // definition de la classe du Logo et des propriétés css du Logo
  div.setAttribute("class", "logo");
  div.style.display = "flex";
  div.style.alignItems = "end";

  // definition du css du nom du Logo
  p.textContent = "Voted";
  p.style.fontSize = "35px";
  p.style.fontWeight = "bold";
  p.style.color = Color.secondaryColor;

  // definition du css de la div du Logo
  span.style.display = "block";
  span.style.width = "8px";
  span.style.height = "8px";
  span.style.marginBottom = "0.4em";
  span.style.backgroundColor = Color.primaryColor;
  span.style.boxShadow = "0 3px 4px 1px #0000004C";
  span.style.marginLeft = "0.05em";
  span.style.borderRadius = "100%";

  return div;
};

export default Logo;
