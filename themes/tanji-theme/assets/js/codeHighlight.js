/**
 * Enhanced code block styling and copy functionality for Tanji Hugo theme
 */
document.addEventListener('DOMContentLoaded', function() {
    // Select all code blocks
    const codeBlocks = document.querySelectorAll('pre > code');
    
    if (codeBlocks.length) {
      // Process each code block
      codeBlocks.forEach((codeBlock, index) => {
        // Get the parent pre element and add necessary styling
        const preElement = codeBlock.parentElement;
        
        // Create a wrapper div to position everything properly
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        
        // Insert the wrapper before the pre element
        preElement.parentNode.insertBefore(wrapper, preElement);
        
        // Move the pre element inside the wrapper
        wrapper.appendChild(preElement);
        
        // Extract language if available
        let language = '';
        for (const className of codeBlock.classList) {
          if (className.startsWith('language-')) {
            language = className.replace('language-', '');
            break;
          }
        }
        
        // Create a toolbar div
        const toolbar = document.createElement('div');
        toolbar.className = 'code-toolbar';
        
        // Add language badge if language is available
        if (language) {
          const languageBadge = document.createElement('span');
          languageBadge.className = 'code-language';
          languageBadge.textContent = language;
          toolbar.appendChild(languageBadge);
        }
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'code-copy-btn';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        copyButton.setAttribute('title', 'Copy code to clipboard');
        copyButton.innerHTML = `
          <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
          </svg>
          <svg class="check-icon hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        
        // Add the copy button to the toolbar
        toolbar.appendChild(copyButton);
        
        // Add the toolbar to the wrapper
        wrapper.insertBefore(toolbar, preElement);
        
        // Add a unique ID to the code block
        const codeId = `code-block-${index}`;
        codeBlock.id = codeId;
        
        // Add copy functionality
        copyButton.addEventListener('click', function() {
          const code = codeBlock.textContent;
          
          // Use the Clipboard API to copy text
          navigator.clipboard.writeText(code).then(function() {
            // Show success state
            const copyIcon = copyButton.querySelector('.copy-icon');
            const checkIcon = copyButton.querySelector('.check-icon');
            
            copyIcon.classList.add('hidden');
            checkIcon.classList.remove('hidden');
            
            // Reset after 2 seconds
            setTimeout(function() {
              copyIcon.classList.remove('hidden');
              checkIcon.classList.add('hidden');
            }, 2000);
            
          }).catch(function(err) {
            console.error('Could not copy text: ', err);
            
            // Fallback for browsers that don't support Clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = code;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
              document.execCommand('copy');
              
              // Show success state
              const copyIcon = copyButton.querySelector('.copy-icon');
              const checkIcon = copyButton.querySelector('.check-icon');
              
              copyIcon.classList.add('hidden');
              checkIcon.classList.remove('hidden');
              
              // Reset after 2 seconds
              setTimeout(function() {
                copyIcon.classList.remove('hidden');
                checkIcon.classList.add('hidden');
              }, 2000);
              
            } catch (err) {
              console.error('Fallback: Could not copy text: ', err);
            }
            
            document.body.removeChild(textArea);
          });
        });
        
        // Add line numbers if enabled
        if (document.body.classList.contains('line-numbers')) {
          addLineNumbers(codeBlock);
        }
      });
    }
    
    // Function to add line numbers
    function addLineNumbers(codeBlock) {
      const code = codeBlock.textContent.split('\n');
      const lineNumbers = document.createElement('div');
      lineNumbers.className = 'line-numbers';
      
      code.forEach((_, i) => {
        if (i < code.length - 1 || code[i]) { // Skip empty last line
          const lineNumber = document.createElement('span');
          lineNumber.textContent = i + 1;
          lineNumbers.appendChild(lineNumber);
        }
      });
      
      const wrapper = codeBlock.closest('.code-block-wrapper');
      wrapper.classList.add('has-line-numbers');
      wrapper.insertBefore(lineNumbers, wrapper.firstChild);
    }
  });