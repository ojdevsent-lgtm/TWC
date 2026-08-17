const question=document.getElementById('question');const ask=document.getElementById('ask');const prompts=document.querySelectorAll('.prompt-row button');const topicButtons=document.querySelectorAll('[data-topic]');
function seed(text){question.value=text;question.focus();}
prompts.forEach(b=>b.addEventListener('click',()=>seed(b.textContent)));
topicButtons.forEach(b=>b.addEventListener('click',()=>{document.querySelector('#assistant')?.scrollIntoView({behavior:'smooth'});seed(`Tell me about ${b.dataset.topic} at TWC`)}));
ask.addEventListener('click',()=>{const value=question.value.trim();if(!value)return;alert('TWC Intelligence is ready for secure server connection. Your question will be sent to the AI service only after the production API endpoint is configured.');});
question.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();ask.click()}});
