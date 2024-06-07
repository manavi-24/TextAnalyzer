import React from 'react'

export default function About(props) {
  return (
    <div>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse your text
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextAnalyzer application offers a comprehensive set of tools for text manipulation and evaluation. It includes text conversion tools that allow users to transform their input text to either uppercase or lowercase, which is useful for emphasizing text or standardizing input for case-insensitive processing. The feature also provides text manipulation options such as clearing all text, copying text to the clipboard, and removing extra spaces within the text. These tools ensure that the text is clean, easily transferable, and free from unwanted whitespace.

In addition to these manipulation tools, the feature offers real-time text statistics. Users can see a live count of the number of words and characters in their text, which helps them meet specific requirements for assignments, articles, or social media posts. An estimated reading time is also provided, based on an average reading speed, which is particularly useful for ensuring that content is appropriately timed for presentations or speeches.

The feature also includes a preview section where users can see how their text looks after applying various transformations, providing immediate feedback and verification. Furthermore, the application supports both dark and light modes, allowing users to choose a display setting that is comfortable for their eyes, whether they are working in a well-lit environment or a darker setting. Overall, the "Analyse Your Text" feature is a powerful and user-friendly tool for anyone who needs to manipulate and evaluate text effectively.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}  data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextAnalyzer application ensures that users have unrestricted access to its robust set of text manipulation and evaluation tools without any cost. This feature democratizes the ability to efficiently manage and analyze text, providing a valuable resource for students, professionals, writers, and anyone in need of text processing capabilities. Users can transform their text to uppercase or lowercase, clear text input, copy text to the clipboard, and remove extra spaces—all without encountering any paywalls or subscription requirements. Additionally, real-time text statistics, including word and character counts and reading time estimates, are available to all users, making it easy to adhere to word limits and gauge the length of reading material. The preview section and support for dark and light modes further enhance the user experience, ensuring that the application is both practical and accessible for everyone. By offering these features for free, TextAnalyzer makes advanced text management tools readily available to a wide audience, promoting greater productivity and efficiency.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}  data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextAnalyzer application ensures seamless accessibility across various web browsers, guaranteeing a consistent user experience regardless of the browser preference. This feature is crucial for ensuring widespread usability, as users may access the application from different devices and platforms. By adhering to web standards and best practices, TextAnalyzer ensures that its functionality and layout remain intact across popular browsers such as Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and others. This compatibility empowers users to utilize the application's comprehensive text manipulation and evaluation tools without encountering any compatibility issues or limitations based on their browser choice. Whether accessing the application from a desktop, laptop, tablet, or mobile device, users can rely on TextAnalyzer to deliver a reliable and consistent experience, enhancing productivity and convenience for all users regardless of their preferred browsing environment.







      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}
