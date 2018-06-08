import React, { Component } from 'react';
import './App.css';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import ResearchAndMethodology from './Components/ResearchAndMethodology';
import DesignProcess from './Components/DesignProcess';
import CaseStudy from './Components/CaseStudy';

import DownloadModal from './Components/DownloadModal';

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import HelperText from "./Components/HelperText";
import Footer from "./Components/Footer";

import update from 'react-addons-update';


import Demo from "./Components/Demo";

// a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};



/**
* Moves an item from one list to another list.
*/
const move = (source, destination, droppableSource, droppableDestination) => {

  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};

  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;

};

class App extends Component {

  constructor(){
    super();
    this.state = {
      researchProcessBlocks: [],
      designProcessBlocks: []
    };

    this.id2List = {
      researchAndMethod: 'researchProcessBlocks',
      designProcess: 'designProcessBlocks'
    };

    this.getList = this.getList.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentWillMount(){
    this.setState({ researchProcessBlocks: [
     
      {
        id: 0,
        title: "Project Summary",
        contentTitle: "Project Summary",
        content: "Describe what the design project is about in a short paragraph. \n\nYou can outline the product you’re designing for, your personal experience that inspired the project, or a client’s need to innovate or improve on the current design. \n\nIf you’re solving a problem in a particular industry, you can include some statistics to illustrate its importance.",
        contentInTemplate: "Describe what the design project is about in a short paragraph. You can outline the product you're designing for, your personal experience that inspired the project, or a client's need to improve on the current design.",
        exampleText: "Example: Parallel Chat — UI/UX case study of a new chat interaction by Daniel Korpai",
        exampleLink: "https://medium.muz.li/parallel-chat-ui-ux-case-study-of-a-new-chat-interaction-7ea6779f884b"
      },
      {
        id: 1,
        title: "Problem Statement",
        contentTitle: "Problem Statement",
        content: "Broadly describe the current problems you have observed in users or from your personal experience.\n\nWhat is the expected outcome that the users are trying to achieve? Does the current solution take a long time? Is it very costly? \n\nOr maybe it requires the users to go through an arduous process? If you have observed the problem from usability testing or data analysis, you can briefly describe the research methods used and the findings.",
        contentInTemplate: "Describe the current problems you have observed in users or from your personal experience. If you have observed the problem from usability testing or data analysis, you can briefly describe the research methods used and the findings.",
        exampleText: "Example: Gamification of timesheet entry — UX Mobile App Case Study by Sid from HelloFello Studio",
        exampleLink: "https://medium.muz.li/gamification-of-timesheet-entry-mobile-app-ux-case-study-934c585d7945"
      },
      {
        id: 2,
        title: "Current Solutions",
        contentTitle: "Current Solutions",
        content: "Describe how users today are getting the job done despite the problems you’ve observed.\n\nPerhaps they are going through many steps to get information while using software, or operating machines in a dangerous fashion.\n\nMaybe there is currently no technology that can effectively solve the problem, and everything is done manually. Outlining the current solutions helps the readers compare and understand the value of the design solutions.",
        contentInTemplate: "Describe how users today are getting the job done despite the problems you've observed. Outlining the current solutions helps the readers compare and understand the value of the design solutions.",
        exampleText: "Example: UI/UX Case Study : Designing a better cinema experience by Ariel Verber",
        exampleLink: "https://medium.muz.li/ui-ux-case-study-designing-a-better-cinema-experience-29abc7cfb94f"
      }
    ]});

    this.setState({ designProcessBlocks: [
      {
        id: 3,
        title: "Pain Points",
        contentTitle: "Pain Points",
        content: "Outline 3 - 5 specific pain points that users encounter while using a product or getting a job done.\n\nYou can go into more details around each pain point, perhaps describing an interaction that is hard to find, cumbersome or restrictive.\n\nIf you have done usability testing, competitive research or dug through customer feedbacks to distill these pain points, include photos, screenshots or customer quotes.",
        contentInTemplate: "Outline 3 - 5 specific pain points that users encounter while using a product or getting a job done. If you have done usability testing, competitive research or dug through customer feedbacks to distill these pain points, include photos, screenshots or customer quotes.",
        exampleText: "Example: Parallel Chat — UI/UX case study of a new chat interaction by Daniel Korpai",
        exampleLink: "https://medium.muz.li/parallel-chat-ui-ux-case-study-of-a-new-chat-interaction-7ea6779f884b"
      },
      {
        id: 4,
        title: "Design Solutions",
        contentTitle: "Design Solutions",
        content: "List 3 - 5 design solutions that you have come up with in regards to the particular pain points that you have discovered.\n\nDescribe the desired outcome of these design solutions briefly. You can list them in order of priority, and if you have done analysis with a prioritization matrix, include the workshop photo or a diagram.",
        contentInTemplate: "List 3 - 5 design solutions that you have come up with in regards to the particular pain points that you have discovered. Describe the desired outcome of these design solutions briefly. If you have done analysis with a prioritization matrix, include the workshop photo or a diagram.",
        exampleText: "Example: Foursquare: A UX case study by Namika Hamasaki",
        exampleLink: "https://medium.com/haiiro-io/foursquare-a-ux-case-study-f606d4757d9b"
      },
      {
        id: 5,
        title: "User Survey",
        contentTitle: "User Survey",
        content: "Surveys are a great tool to collect a sizable amount of user data in a relatively short amount of time.\n\nAsking the right questions is crucial for gathering insights that will inform the design decision making. If you have chosen surveys as a research method, outline what you expected to learn from the surveys.\n\nBriefly describe the target audience who responded, a few questions that were included and the results of the surveys. You can also show a simple graph to illustrate the most significant finding from the survey results.",
        contentInTemplate: "If you have chosen surveys as a research method, outline what you expected to learn from the surveys. Briefly describe the target audience who responded, a few questions that were included and the results of the surveys. You can also show a simple graph to illustrate the most significant finding from the survey results.",
        exampleText: "Example: My Heart Check: a UX case study by Felipe Almeida",
        exampleLink: "https://uxplanet.org/my-heart-check-a-ux-case-study-7f5723a7d5b5"
      },
      {
        id: 6,
        title: "User Interviews",
        contentTitle: "User Interviews",
        content: "Talking to users out in the field is essential for user experience research. You can gain valuable learnings from talking to even just a handful of users.\n\nDepending on your outreach method, include a photo of the set up takes the readers with you on the journey of discovering usability insights. For example, perhaps you staked out in front of a coffee shop or emailed a list of customers to schedule phone calls, include a photo of the process.\n\nBriefly describe the questions that you asked the users or the task that you asked them to complete.",
        contentInTemplate: "Depending on your outreach method, include a photo of the set up takes the readers with you on the journey of discovering usability insights. For example, perhaps you staked out in front of a coffee shop or emailed a list of customers to schedule phone calls, include a photo of the process. Briefly describe the questions that you asked the users or the task that you asked them to complete.",
        exampleText: "Example: Finding My Way Through The Amazon by Agnes Kim",
        exampleLink: "https://uxdesign.cc/finding-my-way-through-the-amazon-c176509bfc23"
      },
      {
        id: 7,
        title: "Usability Testing",
        contentTitle: "Usability Testing",
        content: "There are many ways to do usability testing to uncover pain points and usability issues of an existing product or your design concept.\n\nWhether you are asking your friends or colleagues, approaching strangers in a park or recording videos from remote usability testing sessions, include a photo of your set up or take a screenshot of the responses you got.\n\nDescribe briefly who the target users are, and the tasks that you asked them to complete. Adding a quote or two from the users allow your readers to empathize with them as well.",
        contentInTemplate: "Whether you are asking your friends or colleagues, approaching strangers in a park or recording videos from remote usability testing sessions, include a photo of your set up or take a screenshot of the responses you got. Describe briefly who the target users are, and the tasks that you asked them to complete.",
        exampleText: "Example: Guerrilla Usability Testing the New Experiences Feature on Airbnb’s iOS App by Irene Kuo",
        exampleLink: "https://medium.freecodecamp.org/airbnb-experiences-guerrilla-usability-test-on-ios-app-95c2b5186970"
      },
      {
        id: 8,
        title: "Affinity Mapping",
        contentTitle: "Affinity Mapping",
        content: "Affinity mapping is a great way to sort through the data that you gathered from user research.\n\nBy grouping similar ideas into categories, more prominent themes start to emerge that help you decide on directions for improvement.\n\nIf you have done affinity mapping exercise, show a photo of the workshop or a simple diagram of the groupings of ideas.",
        contentInTemplate: "If you have done affinity mapping exercise, show a photo of the workshop or a simple diagram of the groupings of ideas.",
        exampleText: "Example: UX Study: The Search for Wine by Casper Sermsuksan",
        exampleLink: "https://medium.muz.li/ux-study-the-search-for-wine-492be5bb3b77"
      },
      {
        id: 9,
        title: "Card Sorting",
        contentTitle: "Card Sorting",
        content: "By presenting users with pre-made cards to sort into groups, you can discover what users perceive as similar, hierarchical or what matters most.\n\nIf you have done card sorting exercise with users, colleagues or by yourself, include a photo of the workshop, or use a simple diagram to illustrate how different ideas were sorted.",
        contentInTemplate: "If you have done card sorting exercise with users, colleagues or by yourself, include a photo of the workshop, or use a simple diagram to illustrate how different ideas were sorted.",
        exampleText: "Example: A UX case study on a top marketplace app — Carousell by Lim Zhiyang",
        exampleLink: "https://uxplanet.org/a-ux-case-study-on-a-top-marketplace-app-carousell-24d5c943f774"
      },
      {
        id: 10,
        title: "Ecosystem Mapping",
        contentTitle: "Ecosystem Mapping",
        content: "An ecosystem map helps illustrate how the users, their needs, services or products they use and how they use them fit together in a symbiotic relationship.\n\nIf you have created an ecosystem map for the project, briefly describe the Who, What, Why, When, How, Where and include your diagram.",
        contentInTemplate: "An ecosystem map helps illustrate how the users, their needs, services or products they use and how they use them fit together in a symbiotic relationship. If you have created an ecosystem map for the project, briefly describe the Who, What, Why, When, How, Where and include your diagram.",
        exampleText: "Example: User Experience Design Case Study: Lonely Planet Trips App Redesign by Stavan Himal",
        exampleLink: "https://medium.muz.li/ux-case-study-lonely-planet-trips-app-redesign-20f4d9134b78"
      },
      {
        id: 11,
        title: "Competitive Analysis",
        contentTitle: "Competitive Analysis",
        content: "Analyzing products or services from competing brands helps designers understand the current market, build domain knowledge and spot opportunities for differentiation from other solutions.\n\nIf you have done a competitive analysis for your project, briefly describe the competitors you’ve chosen and the criteria for comparison.\n\nInclude a diagram, usually a table, of the competing products and their features.",
        contentInTemplate: "If you have done a competitive analysis for your project, briefly describe the competitors you've chosen and the criteria for comparison. Include a diagram, usually a table of the competing products and their features.",
        exampleText: "Example: UX Case Study: Bookstore Responsive Website Redesign by Leow Hou Teng",
        exampleLink: "https://uxdesign.cc/ux-case-study-bookstore-responsive-website-redesign-195d15fe83c1"
      },
      {
        id: 12,
        title: "Personas",
        contentTitle: "Personas",
        content: "Personas are fictional characters that represent the target users. Their demographic, goals, needs and behaviors are, however, based on real data from user research.\n\nIf you have created personas for your project, include them so readers can get a relatable snapshot of the users.",
        contentInTemplate: "Personas are fictional characters that represent the target users. Their demographic, goals, needs and behaviors are, however, based on real data from user research. If you have created personas for your project, include them so readers can get a relatable snapshot of the users.",
        exampleText: "Example: Fitbit: A UX Case Study by Stacey Wang",
        exampleLink: "https://uxdesign.cc/fitbit-a-usability-case-study-b23e4c539c3c"
      },
      {
        id: 13,
        title: "Customer Journey Mapping",
        contentTitle: "Customer Journey Mapping",
        content: "A customer journey map illustrates the different phases in which a customer interact with the product or service and the organization that creates it.\n\nFor example, an e-commerce application’s customer journey map may include the different phases of purchasing the product, the actions a customer needs to take, the touchpoints with which the customer interacts with and the emotions that the customer feels at each step.\n\nIf you have created a customer journey map, include the diagram, briefly describe the categories of information you decided to illustrate, and the design decisions that were influenced by it. ",
        contentInTemplate: "A customer journey map illustrates the different phases in which a customer interact with the product or service and the organization that creates it. If you have created a customer journey map, include the diagram, briefly describe the categories of information you decided to illustrate, and the design decisions that were influenced by it.",
        exampleText: "Example: UX Case Study: Is there an app that can change the world? By Yin Zeng",
        exampleLink: "https://uxdesign.cc/is-there-an-app-that-can-change-the-world-6379460799c4"
      },
      {
        id: 14,
        title: "User Flow",
        contentTitle: "User Flow",
        content: "A user flow illustrates how the user completes a task within the product or by using a service. It also makes it easy to see how each step relates to others, and the steps that can be eliminated, added or improved.\n\nIf you have created a user flow, include it and briefly describe which steps you’ve optimized and why.",
        contentInTemplate: "A user flow illustrates how the user completes a task within the product or by using a service. It also makes it easy to see how each step relates to others, and the steps that can be eliminated, added or improved. If you have created a user flow, include it and briefly describe which steps you've optimized and why.",
        exampleText: "Example: Gamification of timesheet entry — UX Mobile App Case Study by Sid",
        exampleLink: "https://medium.muz.li/gamification-of-timesheet-entry-mobile-app-ux-case-study-934c585d7945"
      },
      {
        id: 15,
        title: "Storyboards",
        contentTitle: "Storyboards",
        content: "Storyboarding as a UX tool helps to visualize the user’s experience with a product or service.\n\nIt is easy to iterate and improve upon because of its low fidelity nature. It is also a powerful tool that helps readers of your case study empathize with the user.\n\nIf you have created a storyboard for your project, include the images.",
        contentInTemplate: "Storyboarding as an UX tool helps to visualize the user's experience with a product or service. If you have created a storyboard for your project, include the images.",
        exampleText: "Example: UI/UX Case Study: Mobile Self-Checkout App Design Concept by Leow Hou Teng",
        exampleLink: "https://uxplanet.org/ui-ux-case-study-mobile-self-checkout-app-design-concept-bdb768d091af"
      },
      {
        id: 16,
        title: "Sketches",
        contentTitle: "Sketches",
        content: "It is fascinating for the readers to see sketches of your design because it symbolizes the beginning of the solution taking shape.\n\nIt shows your thinking process and also means that you are capable of quickly iterating ideas with minimal tools. Include a photo of your sketches, or a few sketched screens put together.",
        contentInTemplate: "It is fascinating for the readers to see sketches of your design because it symbolizes the beginning of the solution taking shape. It shows your thinking process and also means that you are capable of quickly iterating ideas with minimal tools. Include a photo of your sketches, or a few sketched screens put together.",
        exampleText: "Example: Foursquare: A UX case study by Namika Hamasaki",
        exampleLink: "https://medium.com/haiiro-io/foursquare-a-ux-case-study-f606d4757d9b"
      },
      {
        id: 17,
        title: "Wireframes",
        contentTitle: "Wireframes",
        content: "Wireframes are barebones of the design solution. Because of its low fidelity nature consisting of grey boxes and lines, sometimes drawn by hand, it’s a visualization of the final product that can be iterated quickly.\n\nIt is likely that you have worked on the wireframes for the project. Presenting them after the sketches and before the visual designs help illustrate how the design evolves from ideas to real life.",
        contentInTemplate: "It is likely that you have worked on the wireframes for the project. Presenting them after the sketches and before the visual designs help illustrate how the design evolves from ideas to real life.",
        exampleText: "Example: UI/UX case study: Dealsdate by Boma Josiah",
        exampleLink: "https://uxdesign.cc/ui-ux-case-study-dealsdate-8cbe2bf17320"
      },
      {
        id: 18,
        title: "Visual Design",
        contentTitle: "Visual Design",
        content: "Packing in brand identity, interaction and content, visual design presents the final design solution in a detailed and polished way.\n\nYou can describe design choices such as colors and styles, explain how a particular design solves the user pain point mentioned before, present a few screens together to show user flow or zoom in on details of a specific component.",
        contentInTemplate: "Describe design choices such as colors and styles, explain how a particular design solves the user pain point mentioned before, present a few screens together to show user flow or zoom in on details of a specific component.",
        exampleText: "Example: UI/UX Case Study: Playlist — Radial Interaction by Johnny Vino",
        exampleLink: "https://medium.muz.li/ui-ux-case-study-playlist-radial-interaction-57df95287ea1"
      },
      {
        id: 19,
        title: "Prototype",
        contentTitle: "Prototype",
        content: "A prototype aims to show how the final design solution would work in a fashion that is closest to real life without building it.\n\nIt is a great way to present visual design, user flow, interactions and microinteractions.\n\nYou can embed a live prototype or record video clips of essential interactions that you’d like to explain further. Briefly describe the points you wish readers to notice when reviewing the prototype.",
        contentInTemplate: "You can embed a live prototype or record video clips of essential interactions that you'd like to explain further. Briefly describe the points you wish readers to notice when reviewing the prototype.",
        exampleText: "Example: Reading Experience Filters Concept by Daniel Korpai",
        exampleLink: "https://medium.muz.li/reading-experience-filters-concept-b748a79f6199"
      },
      {
        id: 20,
        title: "Conclusion",
        contentTitle: "Conclusion",
        content: "At the end of the case study, briefly summarize the journey that you just took the readers through.\n\nWhat are the key learnings? Was there any step that was particularly challenging? What are the next steps for this project? Are there ways to contact you if people are interested in talking with you?\n\nYou can also mention project collaborators here and encourage readers to leave feedback.",
        contentInTemplate: "At the end of the case study, briefly summarize the journey that you just took the readers through. What are the key learnings? Was there any step that was particularly challenging? What are the next steps for this project? Are there ways to contact you if people are interested in talking with you? You can also mention project collaborators here and encourage readers to leave feedback.",
        exampleText: "Example: Runkeeper: A Usability Case Study by Peter Petrovics",
        exampleLink: "https://uxdesign.cc/runkeeper-a-usability-case-study-2749e2403ef2"
      }
    ]})
  }

  getList(id){
    return this.state[this.id2List[id]];
  }

  onDragEnd(result){

    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

   

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === 'designProcess') {
        this.setState({ designProcessBlocks: items });
      }else{
        this.setState({ researchProcessBlocks: items });
      }
    } else {
      
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

     
      this.setState({
        researchProcessBlocks: result.researchAndMethod,
        designProcessBlocks: result.designProcess
      });
      

    


     if(result.researchAndMethod.length == '2')
     {
        for(var i=0; i < result.researchAndMethod.length; i++) {
          if(this.state.researchProcessBlocks[i].id == "7"){
            if(this.state.researchProcessBlocks.splice(i,1)){
                this.setState({
                  researchProcessBlocks:this.state.researchProcessBlocks
                });
                return;
              }
            }
        }
      }
    
       if(result.designProcess.length == '2' &&  result.designProcess[0] !== '')
      {
       
         for(var i=0; i < result.designProcess.length; i++) {
           if(this.state.designProcessBlocks[i].id == "8"){
    
               if(this.state.designProcessBlocks.splice(i,1)){
                 
                 this.setState({
                  designProcessBlocks:this.state.designProcessBlocks
                 });
                 return;
               }
             }
         }
       }
 


    }
  }


  scrollToAppArea = () => {
    document.getElementById('app-area').scrollIntoView();
}

  render() {

   
      
        if(this.state.researchProcessBlocks == '')
        {this.setState({
                     researchProcessBlocks:[{ id:7,  title:"Empty Block",  }]
                       });
        }
        if(this.state.designProcessBlocks == '')
        {
          this.setState({
              designProcessBlocks:[ { id:8, title:"Empty Block" }]
                       });
         }



    return (
      <div className="App">
        <NavBar />
        <Hero click={this.scrollToAppArea}/>
        <div id="app-area">
          <div className="container">
            <HelperText />
            <div className="row">
              <DragDropContext onDragEnd={this.onDragEnd}>
                <ResearchAndMethodology processBlocks={this.state.researchProcessBlocks} />
                <DesignProcess processBlocks={this.state.designProcessBlocks} />
              </DragDropContext>
              <CaseStudy processBlocks={this.state.designProcessBlocks} />
              <DownloadModal processBlocks={this.state.designProcessBlocks} />
            </div>
          </div>
        </div>  
       
        <Footer />
       
      
      </div>
    );
  }
}

export default App;
