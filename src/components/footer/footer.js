import { h } from "preact";
import styles from "./footer.css";

function Footer() {
  return (
    <div class="container">
      <p class={`${styles.slightly_right}`}>
        Created by{" "}
        <a href="https://jimfilippou.github.io" rel="noopener" target="__blank">
          Jim Filippou
        </a>{" "}
        <a href="https://www.linkedin.com/in/konstantinoskalaitzidis/" rel="noopener" target="__blank">
          Kostas Kalaitzidis
        </a>{" "}
        &nbsp;
        <i class="fas fa-bolt"></i>
      </p>
    </div>
  );
}

export default Footer;
