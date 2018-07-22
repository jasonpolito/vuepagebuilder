import Vue from "vue";

function addOverlay(el) {
  let overlay = document.createElement("div");
  overlay.classList.add("editable-overlay");
  el.classList.add("editable");
  el.appendChild(overlay);
  el.addEventListener("mouseover", e => {
    e.stopPropagation();
    let others = document.querySelectorAll(".editable-hovered");
    others.forEach(el => el.classList.remove("editable-hovered"));
    el.classList.add("editable-hovered");
  });
  el.addEventListener("mouseout", e => {
    el.classList.remove("editable-hovered");
  });
}

function addBlockName(el, vnode) {
  let tag = document.createElement("div");
  tag.classList.add("editable-block-name");
  tag.innerText = vnode.context.block.name;
  el.prepend(tag);
}

Vue.directive("editable", {
  bind: (el, binding, vnode) => {
    addOverlay(el);
    addBlockName(el, vnode);
  }
});
