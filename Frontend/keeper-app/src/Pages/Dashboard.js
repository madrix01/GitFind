import React from 'react';
import Navbar from './../components/Navbar';
import './../styles/searchbar.css';
function SearchBar(){
    return <div class="wrapper">
    <div class="container-search">
      <h1
          >Search Tool</h1>
      <div class="container-input">
        <input type="text" list="psychology_theories_list" id="psychology_theories_search" class="search-term" placeholder="Search on name, category, tags etc." />
        <button type="submit" class="search-button" id="selectTheory">
          <i class="fa fa-search"></i>
       </button>
        <datalist id="psychology_theories_list">
           <option value="home" />
           <option value="section_1" />
           <option value="section_2" />
        </datalist>
      </div>
      <ul class="search-history">
        <li>
          <span class="text"><a href="#">Memory Biases</a></span>
          <a href="#" class="link"></a>
        </li>
         <li>
           <span class="text"><a href="#">Persuasive messages that scare</a></span>
          <a href="#" class="link"></a>
        </li>
         <li>
           <span class="text"><a href="#">Increase efforts</a></span>
          <a href="#" class="link"></a>
        </li>
         <li>
           <span class="text"><a href="#">Decision making</a></span>
          <a href="#" class="link"></a>
        </li>
      </ul>
    </div>
  </div>
    ;
}
export default function(){
    return <div>
        <Navbar />
        <SearchBar />
    </div>
}