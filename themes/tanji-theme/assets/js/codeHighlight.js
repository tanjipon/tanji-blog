/**
 * Code syntax highlighting and copy functionality for TechByte Hugo theme
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all the code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    if (codeBlocks.length > 0) {
      // Process each code block
      codeBlocks.forEach((codeBlock, index) => {
        // Get the parent pre element
        const preElement = codeBlock.parentElement;
        
        // Find the language class if it exists
        let language = '';
        Array.from(codeBlock.classList).forEach(className => {
          if (className.startsWith('language-')) {
            language = className.replace('language-', '');
          }
        });
        
        // Create a header div for the code block
        const codeHeader = document.createElement('div');
        codeHeader.className = 'code-header';
        
        // Add language badge if a language is detected
        if (language) {
          const languageBadge = document.createElement('span');
          languageBadge.textContent = language;
          languageBadge.className = 'text-xs font-mono';
          codeHeader.appendChild(languageBadge);
        }
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.innerHTML = `
          <svg class="copy-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          <svg class="check-icon w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        `;
        copyButton.className = 'copy-button';
        copyButton.title = 'Copy code';
        copyButton.setAttribute('aria-label', 'Copy code');
        codeHeader.appendChild(copyButton);
        
        // Add a unique ID to each code block for reference
        const codeId = `code-block-${index}`;
        codeBlock.id = codeId;
        
        // Insert the header before the pre element
        preElement.parentNode.insertBefore(codeHeader, preElement);
        
        // Style the pre element to connect with the header
        preElement.style.borderTopLeftRadius = '0';
        preElement.style.borderTopRightRadius = '0';
        preElement.style.marginTop = '0';
        
        // Add copy functionality
        copyButton.addEventListener('click', () => {
          // Get the text content of the code block
          const code = codeBlock.textContent;
          
          // Copy to clipboard
          navigator.clipboard.writeText(code).then(() => {
            // Show success state
            const copyIcon = copyButton.querySelector('.copy-icon');
            const checkIcon = copyButton.querySelector('.check-icon');
            
            copyIcon.classList.add('hidden');
            checkIcon.classList.remove('hidden');
            
            // Reset after 2 seconds
            setTimeout(() => {
              copyIcon.classList.remove('hidden');
              checkIcon.classList.add('hidden');
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy code: ', err);
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          });
        });
      });
    }
    
    // Add line numbers to code blocks if enabled
    const addLineNumbers = () => {
      document.querySelectorAll('pre > code').forEach(codeBlock => {
        if (!codeBlock.classList.contains('no-line-numbers')) {
          const lineNumbersWrapper = document.createElement('div');
          lineNumbersWrapper.className = 'line-numbers-wrapper';
          
          const code = codeBlock.innerHTML.split('\n');
          const lineNumbers = document.createElement('div');
          lineNumbers.className = 'line-numbers';
          
          code.forEach((_, i) => {
            const span = document.createElement('span');
            span.innerText = i + 1;
            lineNumbers.appendChild(span);
          });
          
          lineNumbersWrapper.appendChild(lineNumbers);
          codeBlock.parentNode.insertBefore(lineNumbersWrapper, codeBlock);
        }
      });
    };
    
    // Check if line numbers are enabled in the site configuration
    // This would be implemented based on the markup.highlight.lineNos setting
    if (document.body.classList.contains('line-numbers')) {
      addLineNumbers();
    }
  });