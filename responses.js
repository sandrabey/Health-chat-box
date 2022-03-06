
function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || "I am not feeling good") {
        return "Hey there,I am your mental health friend. How can I help you today?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "What do you do?" ||"Who are you?" || "Is anyone there?" )   {
        return  "Thanks for asking! I am your mental health friend! I've been trained to support you through any issues you are dealing with. Want to tell me what's wrong? I'm all ears! Technically, I'm a computer that's been trained by a human to assist you, so I don't have real ears... But I like to think of myself as human!";
    } 
    else if (input=="Thanks" || "Thank you"||"That's helpful"||"Thank's a lot!"){
        return "Happy to help!"||"Any time!"
    } 
    else if (input=="I think I have anxiety"||
    "What is anxiety?"||"Tell me about anxiety"||
    "Can I have some information about anxiety?"||"How do I support a loved one with anxiety?"||"How do I fix my anxiety?"){
        return"Anxiety is very common! A lot of people struggle with it. Anxiety can happen when our brain is low on the hormones dopamine, serotonin, \noxytocin, and endorphin. But don't worry! I can teach you how to boost them so you feel better! Which one do you want to start with?";
    }
    else if (input=="joke"||"Tell me a joke!"||
    "Tell me something funny!"||"Do you know a joke?"){
        return "Why did the hipster burn his mouth? He drank the coffee before it was cool."||
        "What did the buffalo say when his son left for college? Bison."
    }
    else if ("I think I have depression",
    "What is depression?"||
    "Tell me about depression"||"Can I have some information about depression?"
    ||"How do I support a loved one with depression?"||
    "How do I fix my depression?"){
        return "Depression is something a lot of people experience. You are not alone! Depression can happen when our brain is low on the hormones dopamine, serotonin, oxytocin, and endorphin. But don't worry! I can teach you how to boost them so you feel better! Which one do you want to start with?";
    }
}
