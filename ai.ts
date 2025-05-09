import nlp from "compromise";
import fs from "fs";

const paragraphs = [
	`John Doe works at OpenAI in San Francisco. 
He announced on March 15, 2023: "We're developing revolutionary AI technology". 
This innovative project could change the future of computing.`,
	`The quick brown fox jumps over the lazy dog. This classic sentence contains all letters of the English alphabet.`,

	`Artificial intelligence is transforming industries worldwide. 
   Companies like Google and Microsoft are investing billions in AI research.`,

	`Climate change remains one of humanity's greatest challenges. 
   Rising temperatures are causing extreme weather events across the globe. 
   Scientists warn we must act before 2030 to avoid catastrophic consequences.`,
	`This code is basically doing some natural language processing (NLP) on a few paragraphs, then it randomly generates new sentences based on the processed data. Here's a simple breakdown:

Parsing the Text:
It uses the "compromise" library to convert each paragraph into JSON data that includes words, their tags, and chunks (groupings of words).

Organizing the Data:
The code then maps each sentence into a structure that includes:

The sentence text.

An array of words (each word with its text, tags, and optionally a chunk).

An array of chunks (sentence structure).

Generating Random Sentences:
It collects all possible sentence structures from the analysis, and then for each chunk in a random structure, it picks a random word that belongs to that chunk. It joins these words together to create a new sentence and makes sure the punctuation and capitalization are fixed.

Working with Files:
It reads a JSON file (data.json) to get some pre-analyzed data (if it exists) and then writes the new analysis results back to that file after processing the paragraphs.

Overall, the code's aim is to experiment with text generation using sentence structures and random word selection. It might be a fun way to see how sentences can be "reassembled" in unexpected ways!

Let me know if you need more details or have any other questions about it.`,
	`John Doe works at OpenAI in San Francisco.`,
	`The quick brown fox jumps over the lazy dog.`,
	`Artificial intelligence is transforming industries worldwide.`,
	`Climate change remains one of humanity's greatest challenges.`,
	`It happened in an instant. 

To be precise, it happened in somewhere between a picosecond and a second. If you had tried to say the words “Sarglop’s Ramen Noodles” in the time it took to happen, it would be over before you finished taking the little breath that humans take before they start speaking. Not even the “s” from “Sarglop’s” would be heard, and anyone wondering what you were going to say would be left with no choice but to guess. Even if, by some cosmic coincidence, they guessed that you had been about to say the name of a noodle, they would have almost no chance of knowing which one, and would probably guess a less thick and less slurpy noodle than Sarglop’s.

So, to tell you about it slowly would be inappropriate, given the shocking speed at which it occurred. 

In fact, Aggomalda’s Universal Ratio, which states that the length of a story may not exceed ten times the length of the event it is describing, dictates that there can be no build up at all. Therefore, at this moment, I can’t tell you why a personal assistant was in space. I cannot even explain how he came to be eating a tuna fish sandwich that wasn’t meant for him.

I know you’re used to being told a great many things in books, written in long sentences with many details, but it simply wouldn’t be right, given how quickly it happened, to say anything but this:

One moment Jackson Fickle was taking the second bite of a tuna fish sandwich, and the next he was pulled inside a black hole. 

Of course, it’s true that I could go back and tell you more about him now, having described the speedy event speedily, but I think you will find that when black holes are involved, the best way backwards is forwards. And as you now know, a black hole is exactly where Jackson found himself after just one-and-a-half bites of someone else's tuna fish sandwich.

He was still chewing when he noticed that his ROC (Roving Observational Craft) was now somewhere that neither he, nor I, can describe to you. And it is important to note that while I chose not to describe Jackson and how he got here in the first place, I am not now choosing to not describe his black hole (which would one day be named ‘Jackson Hole’ after him) because I do not wish to do so, but because it cannot be described. Black holes are, in fact, impossible to describe. The official Universal University of the Universe’s list of things that cannot be described is exactly five items long, and blacks holes are number two on that list. *At the time of this writing, a sixth item, the feeling of having an oncoming sneeze interrupted, is being considered for the list, but has not yet been accepted.

So, to try to describe what Jackson saw and felt inside the black hole would be a waste of time. Instead, I can only share with you the one thing that Jackson remembers clearly about the experience and insists upon to this day: when he came out the other side he had the taste of peppermint in his mouth. And, given that he had been eating a tuna fish sandwich, which is on the opposite side of the UU of U’s spectrum of tastes, you can imagine the drastic nature of his short journey. 

When he arrived safely through the black hole, Jackson, who had yet to say a single word since the time that you learned of his existence, continued to say nothing. If he did speak you could assume that at this time he would have said something peppermint related, but assumptions have a way of getting you into trouble, as you will learn in Chapter 12 (a chapter whose noodles are paper thin, and can hardly be slurped at all). `,
	`His three years of service as the Personal Assistant to the Non-Personal Assistant to the Executive Assistant to the President of Earth had not prepared him for this situation. It had only prepared him for scheduling trips and ordering light food and beverages, neither of which applied here. Still, he had always considered himself lucky to have landed the job at all, since he is overwhelming uncomfortable with being interviewed, and sweats through his underclothes, overclothes, and any accessories he may be wearing. It just so happened that his interview with the Non-Personal Assistant to the Executive Assistant to the President was on a cold January morning, and the heat in the White House’s West Wing had stopped working. The frigid winter air prevented him from sweating through his outermost layer, a winter parka with a fur-lined hood.

Given his lack of relevant experience, Jackson decided to sit back and watch as his ROC was pulled through the enormous metal teeth of the Byzong Warship’s landing bay. Often times in his young life, Jackson had found that when he was confused, outmatched, or otherwise at a disadvantage, the best course of action was no action at all. He found that this worked most of the time (if he had been trained in data evaluation he would had found that it worked exactly 89.9% of the time, but the Personal Assistant to a Non-Personal Assistant to an Executive Assistant is not often trained in data evaluation) whereas, attempting a bold action worked much less frequently (24.59% of the time, in fact), as he had learned, in part, when standing up to his elementary school bully, Arn Brule, in defense of a young girl by the name of Marlet. But,

 you need not remember their names for another fourteen chapters. 

As the cable drew the ROC to rest into the landing bay, Jackson stood fast to his plan of doing nothing. When the Byzong Ship Attendant came to the door and asked Jackson to open it, he did not move. When two more Byzong crew members knocked on the windows and motioned for him to turn the latch and open up, he neither spoke nor shook his head. He did absolutely nothing. For the entire ten minutes that it took them to pry open the door, Jackson did hardly more than blink. By the time they pulled him out and stood him up before the Boss of Ships, everyone in the entire landing bay was angry, except Jackson.

The Ship Attendant handed the Boss of Ships the remainder of the tuna fish sandwich and nodded.

“That’s a beautiful jumpsuit you’re wearing. Why didn’t you open up and let my crew aboard?!’ the Boss asked.

“I wasn’t sure what to do. So, I did nothing.” Jackson replied, in the pleasant, yet slightly shaky voice that you did not know he had until this moment.

“Brilliant shoes,” said the Ship Attendant. “You know you could have saved us a whole lot of time if you had just opened up.”

“I’m terribly sorry,” said Jackson. “It’s just that I don’t quite understand what’s happened. Can you tell me… where am I?”

The Boss of Ships paced in front of Jackson with a scowl.

“First you delay our mission, and now you refuse to compliment us? You must be the worst prisoner we’ve ever had!” 

“Prisoner?” Jackson repeated in disbelief. Suddenly he remembered his Year 8 course of Intergalactic Species, in which he had done exceptionally well. He had learned that Byzongs used to be considered one of the most advanced civilizations in the universe until their former leader made a series of poor and increasingly ill-advised wagers with their planet’s fortunes. Jackson seemed to remember that at a certain point the leader, Supreme Chancellor Plaggis, had become so desperate to win back his losses, that he bet the Jargons that he could tunnel through the center of his planet and come out the other side. Given the astronomical odds against him, it was calculated that winning the bet would have made him the richest person in the universe. Unfortunately for the Byzongs, he disappeared below ground with little more than a motorized shovel and was never heard from again. The Byzongs lost not just their leader, but 80% of their wealth and resources, and have been struggling to recover ever since. He also recalled that Byzong culture demanded that each conversation begin with a compliment from both parties. No exceptions. Jackson sought to fix his mistake immediately.

“What I mean to say…” he corrected. “Is that this is very impressive for a Byzong ship.”

The Boss of Ships scowled at Jackson with crossed arms. “Take him to the Inquisition Pyramid”.

Jackson had taken another Year 8 course named “Methods & Manners”, in which he did exceptionally poorly. Had he done moderately poorly, or even surprisingly poorly instead, he would have recognized that his compliment was what is traditionally considered “backhanded” (meaning not much of a compliment at all). And Byzongs, experienced in these kinds of things, do not take kindly to backhanded compliments. 

Two guards strode forward and grabbed Jackson by the arms. 

“Excellent physique. Now come with us,” they said in unison, throwing on a pair of handcuffs. As they dragged him away, there was little chance of escape, since these handcuffs had been outfitted with an Argall Unbreakable Fogelmite lock, built to last for a thousand years, and special ordered for this occasion by the Byzong general herself. After the click of his well-crafted handcuffs, Jackson heard only the loud clanging of the guards’ boots escorting him down a long hall. 

Had he thought more about it, Jackson might have wanted to look around and glean whatever he could about the ship and the crew as he was led through the hull of the ship. He heard Byzongs hurrying along on either side into rooms whose uses he could hardly fathom. And if he had looked up, just five seconds after leaving the loading bay, he would have had a clear view into a sunken room filled with the finest Byzong scientists of their generation. He would have seen the hologram of a large machine pointed at a model of Earth, and he may have understood, to some degree, the gravity of his situation. Instead, committed to his plan of doing nothing, Jackson didn’t look up at all.`,
	`  Jackson was ushered into a white room with blue stripes that was in the shape of a pyramid. It was the first time he had ever sat in a pyramid-shaped room, he reasoned. Almost every room he’d ever set foot in had four walls, one ceiling, and one floor. The only exception was the morning that he delivered a cup of coffee to the President of Earth in the Oval Office. She had ordered it with “cow’s milk”, eight sugars, and three drops of vanilla. That she had asked for the milk to be “cow’s milk” had always stood out to him, just like the shape of his current interrogation room. 

The guards sat him a chair that was surprisingly comfortable and he could not help but thank them as they took off his handcuffs. 

The two guards stood behind him for three minutes, wondering if they should offer him a drink. After twenty seconds each guard assumed that if it were appropriate to offer him a drink, surely the other guard would have by then, and so Jackson was not offered a drink.

Jackson, satisfied that his plan of doing nothing had been successful in some way, turned around slightly to view the guards. He had never encountered a Byzong in person before and, having encountered a good many in a short period of time, he allowed himself to marvel slightly at their appearance. Byzongs look like humans in every way except for the many ways in which they do not. They are generally muscular in nature, particularly in the calves and forearms. They have noses just one third the size of the average human, and their ears are a foot tall. Their feet, as it happens, are only a human ear long, but they make up for it with special-made metal boots that clunk and clonk as they walk. It is a point of great pride for a Byzong to have loud footsteps, and the Byzong with the loudest footsteps in the room is often considered the most important and well-respected. The competition makes social gatherings unbearably loud, and dance parties illegal.

Noticing him staring at them, the guards became uncomfortable, wondering if they were being judged for not having offered him a drink. Noticing instead their level of discomfort, Jackson turned back around, feeling uncomfortable with how he’d made his captors feel. So it was that all occupants in the pyramid room felt shame and discomfort but none for an appropriate reason. 

Jackson, who was now busying himself by looking around the pyramid room, saw that each of the three walls had exactly one door. The door he had come through was behind him. So, he was facing two doors, angled towards him from both his right and left. The left door opened first. 

As she entered, the footsteps of Inquisitor Slah were the loudest that Jackson had ever heard. He was more thankful than ever to not be handcuffed as he covered his ears. The guards, whose ears were much larger than Jackson’s, had little hope of covering their own, and would anyway not have risked the humiliation. Any indication that the Inquisitor’s boots were too loud for them would make it clear to any Byzong that they themselves do not have boots as loud as hers, and they do not often socialize with Byzongs with boots of her decibel level. 

Mercifully, Inquisitor Slah quickly made her way to the table in front of Jackson and sat down. She looked him up and down through a pair of sharp X-Ring Lie-Detector Glasses, designed to give the wearer the ability to see the truth of a statement as clear as the tiny nose on their face. 

“Wonderful posture. I am Inquisitor Slah. I imagine you have some questions. I will allow you three,” she said.

Jackson raised an eyebrow.

“Why am I here?” he asked.

The Inquisitor smirked. 

“You are here because we kidnapped you.”

“But, why did you kidnap me?” he asked. 

“Because we plan on taking all the water from Earth and you have information that we need.”

Jackson was shocked. He didn’t understand why anyone would want to steal something so important from his planet. So large. So liquid. He didn’t understand what he had to do with such a plan. But more importantly at that moment, he could not understand how something so bold and ambitious could be done. And unfortunately for him, it was that curiosity that informed his third question.

“How do you plan on doing that?!” he asked loudly.

“By using a Third Generation Macro-Electro-Bionic-Hydroxy-Gravitational Tube Ray,” she said confidently.

“But what’s a…” Jackson started to ask another question but the Inquisitor raised her finger in protest.

“Three questions. Three Answers, President Racha.” 

Jackson furrowed his brow.

“Did you just call me…”

The Inquisitor slammed her boot into the ground and Jackson covered his ears once more.

“Ah, ah, ah,” she reiterated. “No more questions.”

Jackson nodded slowly as he lowered his hands.

“Now it is my turn to ask the questions. We will have, an interview of sorts. I’m sure you’re used to those, being President of such a big important planet as Earth.” The Inquisitor let out a little chuckle at her comment. Jackson thought he could hear chuckles from the guards behind him but he couldn’t be sure with his ears still recovering from boots of such stature. 

But he had heard, distinctly, the word ‘interview’, and this set off an involuntary, psychosomatic, pituitary reaction in Jackson that he knew all too well. Sweat began to bead down the back of his neck.

“First question,” she started, “How are your oceans protected? Which oceans are easiest to steal, and which are most heavily defended?”

Jackson’s sweat began to bead on his freckled forehead. 

“I still don’t understand how an ocean can be stolen. We don’t have anything protecting them.”

Inquisitor Slah’s X-RING glasses zoomed in on a perfectly formed drop of sweat on Jackson’s forehead and logged it. It played Jackson’s answer back three times internally, using X-RING patented lie-detector technology, and noted his slightly shaky voice. These factors combined caused the rim of the glasses to flash orange, the interplanetary color of deceit. 

The Inquisitor narrowed her eyes. 

“You lie! So your oceans are well protected, then? No matter, we are prepared to destroy any defenses.”

“Destroy?” Jackson said with concern, trying hard not to say anything that would be considered a question.

“I think there is a misunderstanding. I am not an expert on any defenses at all! I’m just the Personal Assistant to the Non-Personal Assistant to the Executive Assistant to the President!”

Sweat ran down the sides of his face and the X-RING Glasses flashed orange again. 

“Lies! Fibs!” she shouted. Besides the excessively loud stomps that her position afforded her, calling out the fibs of fibbers was the Inquisitor’s favorite part of the job.

“I’m not fibbing! How can you not know what the President…” Jackson caught himself and corrected. “I would think, that if you planned on kidnapping a President, you would know what they looked like first.”

He nodded contentedly at his strategy.

Inquisitor Slah waved him off.

“We do not rely on such frivolous things as appearances. They can be changed easily. Instead we rely on names, which in Byzong culture, can never be changed.” 

“On Earth, names can be changed easily,” he retorted. The sweat stains had begun to seep through his light blue shirt, and the X-RING glasses once more happily tattled on him on for lying.

“I see by your lies that it is much the same in your culture,” she smiled. 

“But my name isn’t President Racha, it’s Jackson Fickle!” he said.

“Our spy has been on your staff for some time, tracking your whereabouts and gathering information. We knew that you would be passing by the Portus Black Hole at lunchtime today. So, he simply placed a tracker in your tuna fish sandwich…”

“Inside the sandwich…,” he whispered in thought.

“That’s right. And once we isolated your location, we simply harpooned your vessel and pulled you through to our location,” she said proudly. “It really couldn’t have gone better.”

The guards behind him smiled at each other.

Jackson sighed and put his head down. 

“I don’t think I was supposed to eat that sandwich,” he said.

The Inquisitor looked at him curiously. Her glasses scanned him feverishly but did not flash.

“What do you mean?” she asked.

“I thought it was meant for me. But now I’m thinking that I made a big mistake…”

“Go on,” she encouraged.

“The sandwich baggie had the initials ’T.F.’ on it, which must have stood for tuna fish. I thought it stood for my name.”

The Inquisitor scowled.

“You just claimed your name was Jackson Fickle.”

“It is. But my real name is Theodore Fickle. But I prefer my middle name… Jackson.”

The Inquisitor leaned back in her chair and let out a long breath.

“Ah, this changing names business again. I don’t need glasses to tell me that’s a fib.”

Before Jackson could say another word, an alarm went off inside the warship. The sound was a high-pitched rhythmic ringing and he couldn’t help but think that it sounded similar to a giant triangle being played by an aggressive percussionist. The guards looked at each other and then at the Inquisitor. 

The guards wondered if they should leave and see why the alarm was going off. But, since the other guard hadn’t moved, each guard assumed that they were doing the right thing by standing still. It was in this way the guards ignored the alarm and stared at the Inquisitor while the alarm rang loudly throughout the room. 

The Inquisitor was about to yell at one of them for not checking on the alarm (she was still deciding on which one to yell at), when a Byzong cadet opened the other door across from Jackson and ran over to the Inquisitor. 

“You have a very strong jawline. The Admiral would like to see you on the bridge,” he said, while standing at attention.

“You have exquisite taste in jawlines,” she complimented. “I’m in the middle of an interrogation! What do they want with me?”

“We received a signal from inside the Jaggidal Asteroid Belt. A Vlop cruiser is threatening to fire on us,” they answered. 

“The Vlops are our allies. Why would they want to fire on us?” Inquisitor Slah was not in the mood for a cadet prank. 

“That’s exactly what the Admiral asked!” he answered excitedly. “And they said they’ve had a really bad day and they’re just in the mood.”

The Inquisitor looked away in thought. “They are a temperamental bunch.” She turned back to the cadet. “But what does this have to do with me?? I’m an Inquisitor, not a Negotiator.”

“They said the only way they’ll consider not firing is if they speak to you.”

“Me?” she asked.

The cadet nodded. 

“But why me? I haven’t even spoken to a Vlop since UU of U,” she mused.

“No one knows,” he answered. “But the Admiral is freaking out and asked me to get you right away.” He leaned in to whisper. “We can’t seem to find their ship anywhere on our radar. It must be their most advanced vessel yet. Undetectable.”

The Inquisitor thought for a moment, then stood up. 

“We’re not finished,” she said to Jackson.

The cadet led her out of the room swiftly, and closed the door behind them. 

Jackson hardly had time to watch it close, when the other door across from him opened again. A young Byzong woman stepped in and pulled aside the Inquisitor’s chair. 

“What lovely scowls you have. My name is Tarza and I’m here to check on the prisoner’s health. Is this him?” she asked, pointing to Jackson.

“You’re very beautiful,” said one guard. “This is the Presidential prisoner,” he corrected proudly.

Tarza smiled. “Of course.”

She looked Jackson over with narrowed eyes, and made a “tsk” sound. 

“I don’t believe it! This prisoner…” she started. 

“Presidential prisoner,” the guard added again. 

“Presidential prisoner,” she corrected, “is clearly suffering from a Form C Phantom Level face rash!”

The guards came around to her side of the table and stared at Jackson intently.

“He is?” asked the guard. “I don’t see anything.”

“Of course you don’t! It’s a Phantom Level infection. Invisible to the naked eye, but has a very distinct feel.”

“But… you didn’t touch his face.” said the guard.

“Of course I didn’t! Do you know how contagious a Form C Phantom Level face rash is?!”

The two guards took one step back. 

“He needs to get to the medical station where we can properly treat him. He’ll need to isolate immediately. I’ll take him since I know the proper precautions, and you clearly don’t. Have you even sprayed yourself with nasal protection?” she asked, incredulous.

The guards quickly covered their noses with their hands.

“I knew it! You’re lucky your noses haven’t fallen off yet,” Tarza shouted as she helped Jackson up from his chair.

“We’ll be going now,” she said as she ushered Jackson towards the door she came from.

“But”, said one of the guards, through the hands covering his mouth. “The Inquisitor has more questions for him…”

Tarza pushed Jackson through the door, not stopping or turning around to address them. 

“She’ll just have to wait. He shouldn’t be around anyone for at least… 24… 48 hours!

The guards were not sure if they should allow their Presidential prisoner to leave the room or not. They were each fairly certain that the Inquisitor would be upset if she learned that he had left. However, they also assumed that if him leaving was truly a problem, then the other guard would have stopped them before they left. And since both of them believed this to be true, neither of them said a word. And this was how it came to be that the door shut with Tarza and Jackson on one side, and the guards on the other. `,
	`“Don’t worry, you’re not sick. I’m going to get you out of here,” assured Tarza in a whisper.

Without saying another word, she rushed Jackson through one narrow hall after the other. Whenever she heard someone coming, she made them change course. Finally, just as Jackson was getting a little winded from the rushing, they came to a blue-lit room and stepped inside. Jackson saw that it had a control station and a large window facing out into space. Tarza shut the door and turned a knob on the wall until the door turned yellow.

“There. That should give us some privacy,” she said in relief. 

“Why did it turn yellow?” Jackson asked.

“It means someone inside is doing accounting,” she answered. “A red door means ‘Do Not Disturb’, but Byzongs tend to eavesdrop on red doors. They think something interesting must be going on inside. No one sits outside a yellow door.”

Jackson nodded. 

Tarza approached him with an intense curiosity.

“Why is it,” she asked, “that you haven’t tried to run from me or ask me any questions yet?”

“I asked about the door,” he corrected. 

“That’s not what I mean. You know now that I lied to the guards about who I was and where I’m taking you, and yet you haven’t tried to figure out who I am and where I’m taking you.”

“I have a policy on circumstances such as these,” he explained.

“What kind of policy?” she asked.

“Well… if I find myself confused, then I do nothing. Statistically, it’s smarter and safer to do nothing.”

“Anytime you’re confused?” she asked with a cocked eyebrow.

“Yes.”

“You do absolutely nothing?”

“Yes.”

“That’s ridiculous,” stated Tarza.

“I don’t think it is,” he retorted. 

“Imagine if the whole universe followed your silly rule. If kids just stopped doing anything every time they got confused. They’d never learn a thing! Imagine if captains stopped giving orders anytime something new and strange happened…”

Jackson went to open his mouth but stopped.

“…Imagine if all the greatest thinkers, from all the planets in the universe just stopped doing things whenever they came across a confusing problem.” she ended.

At first Jackson felt taken aback. Then he decided this may be considered an affront. And then he wondered why there was no such thing as ‘amiddle’, but let it go as quickly as it came, for the aside that it was.

“I see your point,’ said Jackson. 

“Then we’re agreed. As President of Earth you should end this policy of yours immediately,” she answered.

Jackson nodded, which made Tarza smile.

“Yes,” he answered. “Except I’m not President of Earth.”

Tarza stopped smiling.

“What do you mean? Did you change your title? Ruler of Earth? Supreme Titan of Earth?” she asked.

“I’m none of those things. The President is still on her ship, and I’m not her.” he answered. 

“But…” Tarza looked down shaking her head. “How is that possible? They’ve been planning the kidnapping for so long.”

“Perhaps it is time for me to ask some questions of my own. Who are you, and why is that you’re trying to save me, err, I mean the President, if the rest of the Byzongs want to kidnap me, um, her,” Jackson asked, feeling more bold than usual.

Tarza was still in shock but managed to form the words.

“My name is Tarza, that part is true. And I do work on this warship. But for the last four years  I’ve been a member of a secret intra-planetary network of elite agents named The Pocket Watches. And right now our job is to stop this Byzong plan to take all of Earth’s water. If they succeed, the consequences will be much worse than you could possible imagine.” she said with a grave face.

“So they really want to take all of Earth’s water?? I still don’t understand how that’s even possible!”

“With a Third Generation Macro-Electro-Bionic-Hydroxy-Gravitational Tube Ray,” she said cooly. “Anything past First Generation would do the trick, honestly.”

Jackson sighed. “So, what’s your plan to get me out of here then?”

Tarza put her hand to her chin and eyed Jackson.

“Well, the plan was designed for me to get President Racha out of here. And you’re saying you’re an entirely different human than her?” she asked sincerely.

“Right. My name is Jackson.”

“Jackson,” she mirrored. “But you were on the President’s ship, weren’t you?”

He nodded. “Space Force One.”

“So are you in charge of Earth’s defenses? Does the President listen you on important matters? If we get you out of here, can you help us reach the President?” she asked.

Jackson believed strongly in the value of honesty. It is a trait that earned him the superlative “Most Honest” in his high school yearbook. That the title was meant as an insult because Jackson frequently told on classmates that he saw skipping school was not an important detail to the story when he repeated it in his interview for the role of Personal Assistant to the Non-Personal Assistant to the Executive Assistant to the President- a role that does not put him in charge of Earth’s defenses, or allow him to broach important matters with the President. And on this day, he decided the best way to honor the tile of ‘Most Honest’, regardless of its origins, while still securing his chances of rescue from the Byzong warship by the secret intra-planetary network of elite agents named The Pocket Watches, was to answer only the last of Tarza’s questions, without clarifying that he was not answering on behalf of all the questions he was just asked. 

“Yes,” he said.

Tarza smiled in solace.

“Then I think the Pocket Watches will be happy to meet you. All we’ve got to do is warp-port over to them and they’ll take it from there.”

“Warp-port? What’s that? Is that like teleporting?” Jackson asked.

“Teleporting?! Teleporting isn’t even real. That’s something a child would say! Have you really never heard of warp-porting before?”

Jackson shook his head.

“What about The Amazing Warp-Port Challenge? You’re telling me you’ve never seen a single episode?” she asked.

Jackson shook his head in silence. He could have mentioned how expensive XDI Visions with Cross-Universe service are for someone in his position, but then he remembered that he did not want Tarza knowing much more, if anything at all, about his position. If he had seen The Amazing Warp-Port Challenge (new episodes available every Earth Thursday on the Nebula Channel), then he would have known it is the premiere reality series of the millennia, and that Warp-Porting is a fun way to travel great distances in mere seconds, using dimensional slingshot technology. But since he hadn’t seen it, which many would say was punishment enough, he also had to endure the judgmental glare of Tarza.

“All you need to know is that I’m getting us out of here. And just in time, too. Once they realize what I’ve done they’ll come looking for both of us.”

Tarza pulled out a small disc and handed it to Jackson.

“This is your port-pod for warping,” she explained.

“My warp-port port-pod?” he asked.

“No one calls them that,” she said.

“Now, when I say so, I want you to push the green button and initiate the sequence. Everything’s already been input for departure.”

“Got it,” said Jackson as he looked around.

Tarza pulled out her own port-pod and readied herself. 

“Now you might feel a slight pinch on your ears. And a slight burning on your cheeks. And a slight severe pain in your head. But that’s all normal.” she hurriedly added.

“That sounds a bit…” Jackson started.

Tarza raised her hand to shush him. She heard footsteps down the hall approaching their door.

She turned to Jackson with a panicked look.

“Now! Push the green button now!” she shouted.

Jackson turned around and pressed a flashing green button on the control panel next to him. 

Tarza’s eyes went wide. She wanted to scream at him for his mistake. For never turning over his disc and seeing the small green button on the other side. She wanted to chastise him for assuming she had meant for him to push a green button that was clearly part of the ship itself, instead of a button on the port-pod that he had just been handed. She wanted to tell him how angry she was that he just pushed the first flashing green button he saw. But she couldn’t get a single syllable out of her mouth before the blue-lit room was filled with a porous, white foam that froze her in place.`,
	` Jackson Fickle was in the 98th percentile of dream-rememberers. Most mornings, Jackson was able to recall his previous night’s dream. From the age of seven onward, he had experienced at least 4 recurring dreams (recurring being defined as a dream that has been repeated at least twice). The first took place in a jungle, and involved Jackson’s family needing to be saved from a wild tiger. In the second, Jackson lived in a clear hamster ball the size of a house, but his roommates did not resemble anyone from his real life. The third recurring dream took place under the ocean, where Jackson found he had no problem breathing, but did have a problem with a group of angry merpeople. The last and most recurring, involved Jackson sitting in a pitch black room where only another set of eyes are visible. This is the dream Jackson likes to speak about the least.

But as Jackson regained consciousness and opened his eyes next to a still sleeping, Tarza, he could not remember a single dream. He could not remember why he had fallen asleep in the first place. And he could not remember where he was. It was the Boss of Ships, and their muffled voice, that reminded him of his situation. 

“Is he awake yet?” asked the Boss.

“Looks like he’s coming to right now,” said an assistant. 

Jackson could barley make out the shapes and faces of the speakers through the hard hazy foam that encased him. He tried moving his right hand, then his left. When neither budged, he tried moving his right leg, then his left. In a rather desperate attempt to feel some sense of freedom, Jackson tried to wiggle his ears, but then remembered that he had never been able to do that.

“Let me talk to him,” said the Boss.

The assistant raised a glowing mechanical wand towards Jackson. He watched as the tool turned the foam around him a dull orange. It receded rapidly until Jackson’s head and right shoulder were uncovered. 

Jackson shook his head from left to right, happy to once again be able to move and wiggle whatever he liked, excluded his ears, whose lack of mobility could not be blamed on anything other than genetics. Jackson, having been around Byzongs for a small but significant amount of time now, and being adept at assimilating into new cultural circumstances (a trait of his that you may not have been aware of until this moment) asked the Boss of Ships a question, using the proper Byzong etiquette. 

“Wonderful ship you have here! May I please be let go?” he asked.

The Boss of Ships gave an approving smile. 

“You have excellent manners for a prisoner. No, you may not,” he responded.

Jackson began to smack his lips involuntarily.

“What’s that last in my mouth? Is that foam strawberry flavored?” he asked, still smacking.

An assistant with ears so long that they flopped down behind her head, stepped forward with a soft clang and a smile.

“Excellent observational skills. That is the flavoring that I added to make the experience more pleasant.”

“Well I don’t like it one bit,” said Jackson candidly. “I’d prefer chocolate.”

The Boss puffed his chest out.

“How dare you question Maartosh! She is a galaxy-renowned flavorologist. She decided the taste of everything on this ship!”

“You must mean ‘every bit of food on this ship,’” Jackson corrected.

“No, I mean everything on this ship,” the Boss replied.

“But… not everything has a taste,” Jackson retorted.

The Boss scoffed. “Solarwind! Name one thing that doesn’t have a taste!”

Jackson was flabbergasted. Surely, The Boss wasn’t serious. He looked around.

“The floor. The floor doesn’t have a taste,” said Jackson proudly.

“It certainly does. It tastes of bitter metal,” said Maartosh. “I made sure of it.”

Jackson shook his head. 

“No, but, that’s not a taste like a taste that you would enjoy, that’s just…”

“Ah ha!” shouted The Boss. “You are confusing taste with good taste! Of course everything has a taste to it, they’re just not all to your liking. Imagine if everything tasted sweet and wonderful. No one would get anything done!”

Maartosh nodded. “They’re be licking everything, all the time. That’s why I make sure that the things that shouldn’t taste good, don’t taste good.”

“But… but, you don’t need to do anything to make a floor taste bad. It tastes bad already!” said Jackson.

“Ah ha again!” said the Boss. “A moment ago, you said it didn’t have a taste.”

Jackson was about to shout something back, until he realized that the Boss had a point. 

As he often did when he had nothing more clever to say, he tried to change the subject.

He looked over at Tarza, still frozen in foam.

“If you’re going to leave me stuck here, could you at least let Tarza join us?” 

The Boss of Ships stomped his excessively loud boot. 

“You mean your co-conspirator??” he howled. 

“Co-conspirator? I just met her a few moments ago,” Jackson defended. 

The Boss gave a cocky smile.

“You’ve been set in our Intruder Immobilizer foam for three hours, so I highly doubt that,” he said.

“Three hours?!” Jackson said with alarm. “You’ve got to her out of there, now!” 

The Boss sighed.

“Oh, she’s perfectly fine. The foam allows all necessary functions while providing essential nutrients. We’ve been monitoring you both the entire time. After all, you are of great importance to us, President Racha.”

The Boss nodded again to the assistant. 

“Nevertheless.”

The assistant moved their foam-melting wand around Tarza’s until she was free to move her head. Almost immediately, she started to rouse.

Jackson breathed a sigh of relief, then turned his attention back to the Boss.

“Thank you. But stop calling me President Racha!” he insisted.

The Boss grabbed a tablet from another assistant and reviewed the information beaming from its surface. As Jackson had already learned, Byzongs place a good deal of importance on names, and the Boss was embarrassed at the potential blunder.

“How is it that you pronounce it, then? Earth names are all so odd-sounding to me,” he said sincerely. 

Jackson shook his head. 

“No, you don’t understand. I’m—“

“Charming belly you have!” interrupted Tarza, still groggy from the foam. “What he’s trying to say is that his title is President Supreme and Ultimate Ruler of the Earth, Racha, The One and Only.”

The Boss gave a demonstrative bow.

“Ah, yes, sorry to have been so disrespectful,” he said with a chuckle. The assistants behind him joined in as well. 

Jackson looked at Tarza in shock. He could not understand why Tarza had lied. He had just told her hours-that-felt-like-moments ago that he was not in fact, President Racha. And he was equally in shock that she knew the full title that President Racha had given herself in an oft-ignored executive order meant to “jazz up the office a little bit.”

“Pardon us your Supremeness, but we’re going to go get Inquisitor Slah,” said the Boss. “I understand she never finished interviewing you.” 

The Boss walked up to Tarza and stared her right in the eyes.

“And I imagine she may have some questions for you as well.”

Upon hearing the word “interview”, Jackson again began to sweat profusely again.

“We’ll be leaving you in the care of two of our most advanced ROBs, Prod and Dusty,” the Boss continued.

Jackson whispered to Tarza, “‘ROBs’?”

“Short for robots,” she whispered back. “What do you call them on Earth?”

“Bots,” he answered. 

“How odd,” she said.

Prod and Dusty, walked into the room just as the Boss and the assistants left.Their footsteps were practically inaudible, given that each was wearing a pair of bright yellow Fellswig Robot Slippers, designed to make sure that no robot, no matter how large and no matter how heavy, makes more noise than you with their metal feet. 

“Hey, Prod. Hey, Dusty,” said Tarza nonchalantly.

“Hello, Tarza,” said Prod.

“Hiya, Tarza,” said Dusty with a wave of his mechanical arm.

“You know them?” asked Jackson.

“Of course I do,” smiled Tarza. “I’m the one that built them.” 

Jackson felt more sweat get trapped by the foam.`,
	` Prod and Dusty were identical in almost every way. They stood four feet tall, including their antennae, with two legs and two arms each. Their shiny chrome torsos were forged from the same piece of metal, delivered from Earth many years ago to their builder, Tarza. Their mouths opened exactly 3.5 inches wide and 1.5 inches tall. They were so similar, and some might say such exquisite specimens of robotics, that the only notable and discernible difference between Prod and Dusty was the color of their high-definition eye lenses. Prod could be identified by her brown lenses, and Dusty by his green. Apart from that (and the fact that Dusty always wore a shining, spinning disco ball on top of his antennae) they were indistinguishable from each other.

But even if you removed all accessories and swapped their eye colors, Tarza could always tell them apart. It was a trick they tried to get her with many times, but never successfully.

“Dusty, you need to clean your disco ball,” she said as he stomped up to her foam-encased body. 

Dusty stopped moving and began to rotate the ball on his head at a blazing speed. Dust and particles flew off of it until it was as sparkly as the day Tarza found it. As it slowed back down, she was reminded of how enamored Dusty had been of it, as it rotated in front of him. How his eyes had never left it. And how he had insisted that it stay on his head from then on (except when loaning it to Prod for a practical joke).

“I’m sorry… you built these robots?” asked Jackson, with genuine surprise and not just a little bit of admiration. 

“Yes,” answered Tarza, “my real job here is engineer. Recognize anything about them?”

Jackson stared intently at Prod and Dusty. He had seen a few robots in his time, but most of them were White House staff bots that didn’t have arms, legs, or faces. They rolled around and collected things like food and trash and sometimes messages. 

“Should I?” he asked.

“Their chassises, joints, lights- all of it! All their parts were sourced from Earth. Your planet!” she said excitedly. It was most likely that she had gotten the parts directly from Rick’s Earth Parts Emporium. And if she hadn’t, she certainly would have gotten a better deal with Rick, who is known for having the best prices of any Earth-based, Earth parts emporium.

Jackson, upon seeing Tarza’s genuine smile at having built her robots from Earth parts, and finding that he liked seeing it more than he expected, decided to ignore the fact that had an equally genuine lack of knowledge of anything mechanical.

“Ah, yes! Now I see it! I’d recognize those joints anywhere!”

Tarza smiled even larger and gave him a proud nod. “There’s nothing like Earth parts. So much personality to them!”

“So, since you built them, can you make them let us go? Can we still escape?” Jackson asked. The thought of being interviewed by the Inspector a second time was making Jackson more nervous than ever. His sweat was running down from his head to his feet. 

Tarza shook her head.

“It doesn’t work like that. It’s up to them what they do,” she answered. “Besides, they’ve made good careers for themselves here and I’m proud of them. I would never ask them to risk that.”

“Escape request from captive named President Racha recorded and logged,” Prod said, while staring up at Jackson.

“Great work, Prod!” encouraged Tarza. 

Prod let out a gleeful “BEEP”. 

Jackson shook his head in discouragement. However, he was met with a sudden, yet tiny sense of encouragement when he realized that his neck was moving more freely, right where it met his clavicle. It was the exact place where sweat from a forehead might find itself after a minute or two of traveling downward.

“Tarza? Why are you stuck in foam? Why is captive, named President Racha, stuck in foam?” asked Dusty. 

“Well, the truth is, Dusty, I was trying to help the President escape,” she said. “But turns out, that’s not the President.”

Dusty stomped over in front of Jackson. Prod followed behind.

“This is not captive-named-President-Racha?” asked Dusty.

“Orders were to watch captive-named-President-Racha,” added Prod. 

“No… actually my, um, my name is…” Jackson started. Jackson’s sweat began to flow throughout his torso and limbs, and he felt the foam dissolving slowly around it. He could wiggle his fingers and bend his knees slightly. He reasoned that if he could play up his nervousness, his sweat would dissolve enough foam for him to escape.

A tiny window opened up inside Dusty’s chassis and Jackson furrowed his brow apprehensively as he saw a shiny suction cup poke out. He couldn’t help but notice that it was aimed directly at his face.

“What is he doing?” he asked.

Tarza replied excitedly, “They’re going to independently verify your identity. Brilliant, Dusty!”

With the little mobility he had in his neck, Jackson tried desperately to squirm out of the way, but within seconds the suction cup shot forward with a cord attached and stuck to Jackson’s forehead with an unsettling yet satisfying “FLERP”. Crossing his eyes to look up at the suction cup, Jackson no longer felt any need to increase his nervousness. Foam was beginning to dissolve at a rapid pace.

This was the kind of moment that would have normally sent Jackson into a state of silent confusion. However, since his conversation with Tarza, he had found it more difficult to do nothing without feeling a sense of shame. Indeed, her talk had forced him to adapt to a new response to unknown circumstances and stimuli. In this initial trial of a new method, he tried instead “loud panic”. 

“What is this thing?! What are they doing?!” Jackson tried moving his head back and forth to lose the suction cup, but only sent a rippling wave through the cord.

“Relax,” said Tarza. “He’ll give it right back.”

“Give what back??”

“Your name memory,” she replied cooly.

“My name memory? He’s going to take it? Wait! I’ll tell you my name. You can wear those glasses…” Jackson pleaded.

Tarza shook her head as much as she could. “Robs don’t wear glass. Imagine if they did,” she chuckled to Plod. 

“Imagine,” repeated Plod. 

“But I’ll just tell you! My real name is Theodore Fickle but I prefer—“

Before he could finish, Theodore Fickle (the name he was assigned at birth, but not the name that he was about to say) found himself suddenly thrust into his first grade classroom. `,
	` He felt his hair, recently buzzed, by barber not by choice, due to a lice infestation that had just spread through his home. Although never confirmed, Theodore “Jackson” Fickle, would always blame his youngest sister for the infestation (and the humiliation). As he sat in his memory, listening to Mr. Langdon, Jackson recalled that the short, jolly teacher was his second favorite of all time. His first favorite teacher was his third grade teacher, Ms. Polly, and his third favorite teacher was his second grade teacher Mrs. Julba. incidentally, his least favorite teacher had his first favorite name, Mr. Prestidigitalio. He had taught kindergarten, and refused to call Jackson, “Jackson”. 

Jackson felt his hand raise, excited to answer a question that had just been asked. Something about tuna fish. No. his brain was confused now. The question was about the ocean, but the answer was not tuna fish, but rather salt water. Mr. Langdon scanned the room then settled on the hand of young Jackson. With a broad smile, he called on him.

“Ah, Theodore Fickle has the answer!”

Jackson felt his smile lessen. He did not like having to correct people. He shuffled in his seat and cleared his throat.

“Um, my real name is Theodore Fickle, but everyone calls me Jackson,” he said in an uneven and high-pitched voice.

The colors of the room began to blend together. Inexplicably, the room itself started to stretch and warp, and then slide out of view, until Jackson saw nothing but black. He couldn’t remember where he had just been. He couldn’t remember what he had just heard. 

“Don’t take too much, now Dusty. Remember to put most of it back,” Tarza’s voice cut through. 

Suddenly the colors came streaming back into his mind. The lines were still a bit smudged, but it was his classroom once again. Mr. Langdon was there, with a smile that was, for just a moment, larger than any Jackson had ever seen. As the scene settled, everything was right again. 

He felt the suction cup leave his forehead with a soft “POP” and he was back in the ship, looking at two robots. Dusty’s tiny metal window closed again.

Jackson was wobbly. So wobbly, in fact, that he realized the foam had lost its grip on him.

“Name confirmed. Not President Racha.”

Dusty and Plod turned towards each other. 

“New directive required,” said Plod.

Jackson had had enough. Breaking through the thin layer of foam around his arms, Jackson tried out a second method, for the first time: heroic action.

“Jackson, how did you…”

Without a word, Jackson kicked through the remaining foam and stepped out onto the cold, not-at-all-good-tasting floor. He stood tall, feeling strong and courageous. 

 

Dusty and Plod hastily wheeled to opposite sides of the room and stayed there.

Jackson tried to break Tarza free, but her foam was too thick. He tried to pull it away from her, even lifting his leg against it for leverage, but could not get it to budge. He found himself feeling less strong and courageous by the second.

“How do I get you out?” he asked.

“There!” said Tarza. “The green levers on the control panel.”

Jackson pulled down on the closest of two green levers and a mist covered his former pod and dissolved all the remaining foam. Without hesitation, he pulled the second and Tarza was soon sprayed herself. With nothing left but a few shreds of foam on her clothes, she stepped down onto the floor, licking her lips.

“Mmmm, butterscotch flavored spray. You missed out.”

Tarza stomped around, searching every inch of the room.

“Quick, we’ve got to find the Warp-Ports!”

Jackson brushed himself off and started kicking the last remaining bits of foam. 

“Maybe they got frozen in the foam with us!” he said.

“No,” said Tarza, shaking her head. “The foam only freezes living beings and their clothing. It’s very smart. In fact, it was a Byzong inventor who realized that you can isolate not just carbon beings but their… wait a second…”

“What?” asked Jackson, glad that she had been cut short before going even further over his head.

“They must still be there! The foam would’ve let them drop to the floor! Come on!” Tarza grabbed Jackson’s hand and he felt an electric buzz shoot all the way up to his shoulder. Although new, and startling to him, it was not an unpleasant sensation.

They raced through the corridors as fast as their legs would take them. When a Byzong intern passed by, Jackson tucked behind Tarza, making himself as inconspicuous as possible, and the intern passed by without noticing. Before reaching the blue lit room again, Jackson noticed a vending machine that read “Galaxy Sweets” Having not eaten since the few bites of tuna fish sandwich that sent him through a black hole, and having just been frozen in foam for three hours, Jackson was understandable stavrving. 

“Wait,” he said, pulling Tarza to a stop. “I need to eat something. Can you get me one of these?”

Tarza whispered hastily. “You’ve got to be kidding me! there’ll be plenty of time for snacks once we’ve been picked up by the Pocket Watches!”

Jackson grabbed at his belly. “You don’t understand! It’s been so long since I’ve eaten. I’m starving! Plus I’m not used to breaking out of things like that. It took it out of me.”

“How did you do that, anyway?” she asked.

“I sweat when I’m nervous,” he answered sheepishly. “Human sweat must dissolve the foam.”

“You’re full of surprises, aren’t you,” she replied. She looked at him with sympathy. “Well, it’s a good sign that you’re hungry I suppose. Black holes can sometimes reverse your intestines. Fine. But be quick about it.”

Making a firm and immediate decision to ignore her comment on his intestines, Jackson thanked her. Placing her hand on the side of the machine, the display shifted to ask which of three kinds of bars they would like. The first was a small bucket of rock-shaped candies called Grubble. The second was a long, green cylinder called Ozzback Ooze. And the last was a Saturn Cocoa Bar, the only one that Jackson recognized. 

Jackson Fickle had long said that Saturn Cocoa Bar was his favorite sweet treat of all. However, in his lifetime until this point, he had consumed 457 Saturn Cocoa Bars. This meant that he had consumed Ruby Razzies at least one hundred times more. It also meant that he had chosen Chunkies Smooth and Creamies 62% of the time, when given an option between the two. By no commonly accepted metric and only by his self declaration, were Saturn Cocoa Bars his favorite. Yet, when he saw this option at the “Galaxy Sweets” vending machine, it was an easy and instant choice.

He touched the picture of the Saturn Cocoa Bar on the screen and smiled to Tarza. “Saturn Cocoa Bars are my favorite.” And as they raced down the hallway, he wasted no time in opening and taking a bite of the delectable candy bar, because while I may have said that Saturn Cocoa Bars fall in stature to Ruby Razzies and Chunkies Smooth and Creamies in Jackson Fickle’s personal life archives, they are still the bar with the most chocolatey, crunchy, and out-of-this-world taste around. 

The door to the room was still lit yellow. “That’s lucky,” said Tarza softly. “Looks like no one’s gone in since.”

“Great!” said Jackson. He was ready to be off of the chaotic Byzong warship that had brought him confusion, interrogation, and foam confinement. So it was a letdown, if not a downright disappointment, when he took his first step in the control room and saw a group of three Byzong accountants standing around a high top table mumbling numbers out loud as they worked. 

The pair froze, unblinking, as the accountants stopped and turned to meet their eyes. Tarza immediately spotted the two Warp Ports, still lying on the floor up against the far wall. 

The accountants stared for a breath before one spoke up.

“What impressive confidence you both have to open a red door! We’re going over the numbers for the month. Are you here to help?” asked the Byzong accountant with the largest, loudest looking shoes. 

“You have wonderful taste in rooms,” said Tarza through a forced smile. “We’re not accountants, this is just… our favorite place to work as well…”

“Do you outrank us?” asked the accountant, matter-of-factly.

“Well, no I don’t think so… we just…”

“We need the room,” explained the accountant, turning back towards the work in front of him. “With so much ruckus going on around here it’s a wonder we found a place at all.”

The accountants resumed mumbling and searching through numbers on the computers in front of them, sending the most pertinent to a holographic pillar in the center of the table at a rapid pace. “Twelve thousand, four hundred and ninety three. Four-thousand, nine hundred and ninety-nine,” said another. “Eighty-one. Three hundred and two. Four.” muttered another.  The third was rattling off numbers at such a speed that neither Tarza nor Jackson could understand.

Tarza leaned over. “What are we going to do? The Warp Ports are right over there.”

Jackson cocked his head in thought. “Did you notice, Tarza, that they didn’t say anything about me being human…?” he whispered.

“You’re right,” whispered Tarza. “Maybe they didn’t notice?”

“Maybe,” he said, regaining full volume. “Maybe they don’t care…”

Jackson began walking forward, but Tarza reached out to stop him. 

“Wait!” she yelled. They both looked at the accountants. There was no reaction. Only working. 

“Fifty-seven. Fifty-seven point five.” said the head accountant.

Tarza mouthed her next words with barely a sound. “What are you doing?”

Jackson smirked. “You wanted me to be a person of action right? Well, I’m testing a theory.”

Feeling bolder, he walked behind the accountants and held out his arms. “Wabble Wabble Wablle!” he yelled. The accountants continued sending numbers to the pillar with startling speed. “One hundred twenty one thousand and one.”

“The President has a team of accountants, a whole slew of them, and they never seem interested in absolutely anything other than numbers. I saw one eat their lunch once without ever even looking at it!” The meal he was referring to had been a tuna fish sandwich with a side of chips. Mind you, this was not the same tuna fish sandwich that had set Jackson on a course to this very room, of course. The tuna fish sandwich that Jackson had been eating earlier this day had been a traditional composition of white albacore tuna and mayo on white bread. The tuna fish sandwich being referred to indirectly at the current time, had been made with chunk light tuna, and a generous helping of mayonnaise, mustard, and relish on rye bread, five months earlier. 

Tarza walked forward hesitantly. “So… they’re not even listening?” she asked.

Jackson nodded. “I think they’re even worse than the human accountants.”

Similarly to the accountants, Tarza had only one thought on her mind. Hesitantly, still not sure if she could trust Jackson’s theory, Tarza made her way over to the Warp Ports and grabbed them from the floor. 

“I don’t believe it!” she said to herself. “We got em!”

Tarza spun around to hand Jackson his Warp Port, but having become comfortable in the knowledge that they could do whatever they wanted, he was now finishing the rest of his Saturn Cocoa Bar and reading the back of the wrapper. 

“Amazing. Only ninety-five calories in the entire bar.”

“Ninety-five” repeated, the head accountant absent-mindedly. He shook his head at the mistake then turned to face Jackson with a fierce scowl. It sent shivers down his spine.

“What charming, small ears you have…” said the head accountant with a vicious glare. He stepped forward and towered over Jackson with his large metal shoes, tall ears, and intimidating size. “What is a human doing on our ship, interfering with our budget calculation!”

Tarza made a quick calculation and watched on in wonder, as Jackson backed up, stumbled over his feet, and landed his rear end squarely on the green button of the control panel. The room was instantly filled with foam once again, this time trapping one human and four Byzongs. 

 Chapter Eight: Ronald Elastic’s Goo-Be-Goon

By the time Jackson woke up this time, his head was already out of the foam. Tarza had been awake, with her head freed, for 2 minutes and 39 seconds before him. As his eyes adjusted from his second foam-induced nap, he made out the fuzzy shape of a slender Byzong standing in front of them. He knew it instantly to be Inquisitor Slah.

Clearly in the middle of an important conversation with Tarza, Jackson decided the best course of action would be to close his eyes again, and listen to the Inquisitor before making his presence known.

“It will be not pleasant,” said the Inquisitor in a sinister tone. “But if you comply with me now, I will make sure that your punishment lasts only three orbits. Otherwise you may face as many as ten.”

“Comply with you how?” snapped Tarza. “I’ve nothing to confess, nothing to admit, and nothing to say.”

Jackson couldn’t help but smile ever-so-slightly.

“Shall I write down all three of those?” asked an assistant. “Seems a bit redundant to me.”

Jackson heard the jarringly loud footsteps of the Inquisitor as she approached Tarza, and tried his best not to wince.

“Just put down that the prisoner is hostile,” smirked the Inquisitor.

“Hostile,” scoffed Tarza. “I’m not the one about to drain a planet of all its water.”

Jackson’s eyes opened almost involuntarily to watch.

The Inquisitor leaned in, just inches from Tarza’s face.

“Is that why you tried to free their President? Why you concocted that false alarm? Because you thought you could save them?” Inquisitor Slah gave a cold smirk.

The guards behind her looked at each other and laughed.

Jackson felt a sense of dread that he had not felt the entire time he’d been on the Byzong Warship. 

“Tell me, in all the years of earth’s existence, how many times have they battled the Byzongs?” asked the Inquisitor. “President Racha?” She turned her head sharply until her eyes rested on Jackson’s.

He froze. 

“No answer?” she pressed. “Well allow me to enlighten you. In the 4.543 billion years that your planet has existed, you have battled the Byzong’s exactly zero times. In fact, your planet has somehow managed to never, not once, be attacked by a foreign planet. Do you know how rare that is?”

Jackson let out a breath that he’d been holding in, by sheer coincidence, for 4.543 seconds, rounded to the nearest thousandth. He did want to know how rare that is, but found himself stating a fact of his own instead.

“I am not President Racha.”

The Inquisitor decided to no longer allow herself to be distracted by what she deemed to be the lies of a prisoner. In her years of Inquisitor training at the U U of U, she had trained under none other than the Byzong-renowned Inquisitor Saxel. 

It was during one of their first labs, where Parlodin Turs, a species of vertebrae that most-closely resembles an earth rat, were introduced to distract and create chaos, that Inquisitor Saxel first introduced the idea of “radical focus” to not-yet-Inquisitor Slah. And with a Parlodin Tur taking a nap inside her left ear, she proved herself a rising star, by completing the interrogation of a fellow student with unmatched efficacy. Although she would, at times, engage with the frivolous answers of her captives, the Inquisitor reminded herself in this moment why she became known as Inquisitor Saxel’s star pupil.

“There are only three planets with sentient life, in the the entire known universe, who have never been at war with a foreign planet. The first is a planet whose inhabitants just became smart enough to qualify for inclusion in this list two hours ago. The planet is so primitive that it does not even have a name. And yet, a Vlop warship is on its way now to be the first to attack it anyway. They drew the honor in a raffle.”

Jackson attempted to interject, with his real name once more, but radical focus, it has been said, is harder break than a brick wall. 

“The second,” she continued, “is a planet named Goozor. Goozor, and its primary species, the Goozons, are made entirely of a viscous jelly-like substance that sticks to your skin permanently on contact, and carries with it a smell so vile that anyone who touches it is banished to a distant solar system, where they are given a case of Ronald Elastic’s Goo Be Gone, “The only gunk strong enough to get your goo gone for good,” compliments of Those In Charge.

Those in Charge, affectionately known as TIC, is a group of super-intelligent beings who rule all planets and species in existence. They govern from a central station called the Rainbow Realm, and their members are recruited as the best and brightest from all corners of the universe. It was actually a member of TIC who first discovered that the universe did, in fact, have corners. Of these corners, two are purely theoretical, while five have been observed. These corners are rumored to be dreadfully hard to clean, during the universe’s Spring cleaning each cosmic year. 

It is worth nothing that, while many dream of being summoned to the Rainbow Realm to become a member of TIC, Inquisitor Slah was never one of them.

“The third is Earth. A planet so tribalistic that is has been at war with itself for eons. Until now, no civilization thought it worthwhile to invade, preferring instead to wait for the planet to either unite or self-destruct. But time has run out for your planet, President Racha. The need for your most precious resource has recently become… dire.”

“Our oceans you mean? Why is there a dire need all of a sudden?” Jackson was growing tired of the mounting questions in his head.

“That’s not important!” she snapped. A pause. “Well, it is important but I’m not going to tell you. What I need from you is a layout of Earth’s defense system. All of it.”

Jackson and Tarza began to protest at the same time, but the Inquisitor simply raised a hand to stop them. 

“I expected your objections. That’s why we won’t be waiting around for your cooperation.”

Inquisitor Slah waved a hand towards a guard.

Dusty and Plod entered the room again and wheeled themselves in front of Jackson.

“Our ROBs will be extracting the memories of your defense meetings. We will soon have all the information we need to attack earth.” The Inquisitor leaned in. “And when we do, you will no longer be of any use to us.”

Out of the corner of his eye, Jackson saw her assistant shuffle in his chair and clear his throat. This Byzong also did not like being in the uncomfortable position of correcting his superior. In addition, their usual chair was being repaired for a taste malfunction, and their current chair was designed for a Byzong with smaller hips than theirs, so they were shifting due to a literal uncomfortable position as well. 

“Um, remember what the Boss said?” The Byzong immediately sunk down in his chair to appear smaller, but this only made the chair even less comfortable, which he would already have deemed an “Awful” on the U U of U’s Discomfort Scale for Clothing, Conversations, and Chairs, which ran from “Perfect” to “Perfectly Awful”.

Inquisitor Slah narrowed her eyes at Jackson in disgust. She let out a scalding sigh. 

“You’re lucky that the Boss believes you to be an important bargaining chip. Otherwise I’d throw you right back into that black hole and leave you there.”

Jackson tasted peppermint.

The Inquisitor backed up and smirked. 

“Now, these ROBs will find your memory no matter how long it takes, and this time, I’ll make sure you don’t escape… I’m not going anywhere.”

As the Inquisitor moved to the back of the room to join her assistants behind blinking control panels, Jackson and Tarza looked at each other. 

“What are we going to do?” whispered Jackson. “She’ll find out I’m not the President and then she’ll toss me into that black hole!”

Tarza furrowed her brow in thought. “Dusty and Plod must not have told her who you are yet. If I know them, they’re still running calculations on who to trust. If I can convince them to help us, we might have a chance.”

“How are you going to do that?” asked Jackson.

“Trust me,” she answered. And despite himself. Despite having just met her on a strange ship under stranger circumstances, he did.

Dusty and Plod wheeled themselves over in front of Jackson and prepared to take his memories.

“Inquisitor!” shouted Tarza. 

The Inquisitor looked up from her station.

“I fear you’re going to waste an awful lot of time looking for his memories.”

“Oh?” replied the Inquisitor. “And why is that?”

“Think about it,” said Tarza. “He’s the President of Earth. Don’t you think he’s been trained on memory repression. You could spend weeks, if not months, trying to find the information you’re looking for.”

“Then he’d better get comfortable,” she said coldly. Without glancing up again, she began fiddling with buttons and mechanisms.

Dusty and Plod got closer.

Tarza shook her head. “But, there’s a better way!”

“Out with it,” said Inquisitor Slah from across the room.

“He told me about their defenses!” blurted Tarza.

The Inquisitor stopped what she was doing. 

“He did?” she asked.

“Yes!” nodded Tarza. “We discussed them at length. I can tell you exactly when and where he told me. You can find the conversation easily. Even the best memory suppression won’t stop a targeted search like that.”

The Inquisitor pondered this. “You expect me to trust a traitor? You’re just as likely to lead us on a wild scronge chase.”

Before Slah could consider grabbing her pair of X-Ring Lie Detector Glasses, Tarza spoke out again.

“He also told me about their counteroffensive…”

“Counteroffensive?” Inquisitor Slah stood up sharply.

“Thats right,” said Tarza. “They’ve known about your plans for a while now. They have spies too, you know.” 

The Inquisitor was flummoxed. “And… and why would you help us now?”

“I want to make a deal. I tell you where to find the memories and you let me go.”

Slah rubbed her chin. “You give up the memories, and then I will decide if they are worthy of release.”

Tarza shook her head and closed her eyes. “No deal. I need assurances or else you can go fishing in his head for as long as it takes for all I care. He’ll never give them up.”

The phrase “fishing in his head” did not sit well with Jackson. He had gone fishing with his mother once back on Earth. After three hours on the lake by his childhood home, Jackson had gone home soaking wet, smelling like worms, and without a fish. He didn’t like the idea of a Byzong roaming around his brain with a fishing rod, even if they proved better than him at staying inside the boat.

The Inquisitor thought for a moment, and then began to smile. 

“You may be right, Tarza, that he would prove a difficult target. But, you’ve just revealed that the information we need is in your head now, too. And you were not trained in the art of memory deception, were you?” she asked with a sinister glare. 

Tarza acted stunned. “No… I… I guess I wasn’t.”

Jackson began to sweat. But the foam didn’t budge. They’d been ready for him this time.

“Well then,” said the Inquisitor, “I think I’ll be having those memories…”

Dusty and Plod turned to face Tarza, and opened up their windows, suction cups ready.

“And you won’t be going anywhere.”

As the suction cups flew through the air towards her forehead, Jackson caught Tarza’s eye and the ever-so-small glint of a smile.`,
];

// Enhanced interfaces with grammatical metadata
interface WordEntry {
	id: string;
	text: string;
	normalized: string;
	lemma: string;
	tags: string[];
	chunks: string[];
	frequency: number;
	grammaticalRole?: string;
}

interface SentencePattern {
	id: string;
	structure: string[];
	wordIds: string[];
	grammaticalTemplate: string;
}

interface NgramModel {
	unigrams: { [word: string]: number };
	bigrams: { [prefix: string]: { [next: string]: number } };
	trigrams: { [prefix: string]: { [next: string]: number } };
	quadgrams: { [prefix: string]: { [next: string]: number } };
	chunkSequences: { [sequence: string]: number };
	grammarPatterns: { [pattern: string]: number };
}

interface LanguageModel {
	words: { [id: string]: WordEntry };
	sentences: SentencePattern[];
	ngrams: NgramModel;
	stats: {
		totalWords: number;
		totalSentences: number;
		uniqueWords: number;
		grammarPatterns: number;
	};
}

class GrammarEnforcer {
	private conjugationRules: { [tense: string]: { [lemma: string]: string } };

	constructor() {
		// Basic conjugation rules - in production you'd want a full conjugation library
		this.conjugationRules = {
			present: {
				be: "is",
				have: "has",
				do: "does",
				go: "goes",
			},
			past: {
				be: "was",
				have: "had",
				do: "did",
				go: "went",
			},
		};
	}

	public getConjugatedForm(
		lemma: string,
		tense: string,
		plural: boolean
	): string {
		if (plural && tense === "present") return lemma;
		return this.conjugationRules[tense]?.[lemma] || lemma;
	}

	public enforceSubjectVerbAgreement(
		subject: WordEntry,
		verb: WordEntry
	): WordEntry {
		const isPlural = subject.tags.includes("Plural");
		const tense = verb.tags.includes("PastTense") ? "past" : "present";
		const conjugated = this.getConjugatedForm(verb.lemma, tense, isPlural);

		return {
			...verb,
			text: conjugated,
			normalized: conjugated.toLowerCase(),
		};
	}

	public enforceDeterminerNounAgreement(
		determiner: WordEntry,
		noun: WordEntry
	): WordEntry {
		const determinerText = determiner.text.toLowerCase();
		const nounText = noun.text.toLowerCase();

		if (determinerText === "a" && /^[aeiou]/.test(nounText)) {
			return { ...determiner, text: "an", normalized: "an" };
		}
		if (determinerText === "an" && !/^[aeiou]/.test(nounText)) {
			return { ...determiner, text: "a", normalized: "a" };
		}
		return determiner;
	}
}

class ProfessionalTextGenerator {
	public model!: LanguageModel;
	private grammarEnforcer: GrammarEnforcer;
	public ngramSize: number;
	private minSentenceLength: number;
	private maxSentenceLength: number;

	constructor(
		ngramSize: number = 3,
		minSentenceLength: number = 5,
		maxSentenceLength: number = 20
	) {
		this.ngramSize = Math.min(Math.max(ngramSize, 1), 4);
		this.minSentenceLength = minSentenceLength;
		this.maxSentenceLength = maxSentenceLength;
		this.grammarEnforcer = new GrammarEnforcer();
		this.initializeModel();
	}

	private initializeModel(): void {
		this.model = {
			words: {},
			sentences: [],
			ngrams: {
				unigrams: {},
				bigrams: {},
				trigrams: {},
				quadgrams: {},
				chunkSequences: {},
				grammarPatterns: {},
			},
			stats: {
				totalWords: 0,
				totalSentences: 0,
				uniqueWords: 0,
				grammarPatterns: 0,
			},
		};
	}

	public processCorpus(paragraphs: string[]): void {
		paragraphs.forEach((paragraph) => {
			const doc = nlp(paragraph);
			const sentences = doc.json() as any[];

			sentences.forEach((sentence) => {
				this.processSentence(sentence);
			});
		});

		this.calculateNgramProbabilities();
		this.analyzeGrammarPatterns();
		this.updateStatistics();
	}
	private updateStatistics(): void {
		this.model.stats.totalSentences = this.model.sentences.length;
	}

	private processSentence(sentence: any): void {
		const terms = sentence.terms.map((term: any) => ({
			text: term.text,
			normalized: term.normal || term.text.toLowerCase(),
			lemma: term.lemma || term.text.toLowerCase(),
			tags: term.tags,
			chunk: term.chunk,
			grammaticalRole: this.determineGrammaticalRole(term),
		}));

		const wordIds: string[] = [];
		const structure: string[] = [];
		const words: string[] = [];

		terms.forEach((term: { normalized: string; chunk: string }) => {
			const wordId = this.processWord(term);
			wordIds.push(wordId);
			words.push(term.normalized);

			if (term.chunk) {
				structure.push(term.chunk);
			}
		});

		this.model.sentences.push({
			id: `sent-${this.model.sentences.length}`,
			structure,
			wordIds,
			grammaticalTemplate: this.createGrammaticalTemplate(terms),
		});

		this.processNgrams(words, structure);
	}

	private determineGrammaticalRole(term: any): string {
		if (term.tags.includes("Determiner")) return "determiner";
		if (term.tags.includes("Noun") && term.tags.includes("Subject"))
			return "subject";
		if (term.tags.includes("Verb")) return "verb";
		if (term.tags.includes("Adjective")) return "adjective";
		if (term.tags.includes("Adverb")) return "adverb";
		if (term.tags.includes("Preposition")) return "preposition";
		return "other";
	}

	private createGrammaticalTemplate(terms: any[]): string {
		return terms
			.map((term) => term.grammaticalRole || term.chunk || "other")
			.join("->");
	}

	private processWord(word: any): string {
		const wordKey = `${word.normalized}-${word.tags.join("-")}-${
			word.grammaticalRole
		}`;

		if (!this.model.words[wordKey]) {
			this.model.words[wordKey] = {
				id: wordKey,
				text: word.text,
				normalized: word.normalized,
				lemma: word.lemma,
				tags: word.tags,
				chunks: word.chunk ? [word.chunk] : [],
				frequency: 0,
				grammaticalRole: word.grammaticalRole,
			};
			this.model.stats.uniqueWords++;
		}

		this.model.words[wordKey].frequency++;
		this.model.stats.totalWords++;
		this.model.ngrams.unigrams[word.normalized] =
			(this.model.ngrams.unigrams[word.normalized] || 0) + 1;

		if (
			word.chunk &&
			!this.model.words[wordKey].chunks.includes(word.chunk)
		) {
			this.model.words[wordKey].chunks.push(word.chunk);
		}

		return wordKey;
	}

	private processNgrams(words: string[], chunks: string[]): void {
		// Word ngrams
		for (let i = 0; i < words.length; i++) {
			if (i < words.length - 1) {
				const bigramPrefix = words[i];
				this.model.ngrams.bigrams[bigramPrefix] =
					this.model.ngrams.bigrams[bigramPrefix] || {};
				this.model.ngrams.bigrams[bigramPrefix][words[i + 1]] =
					(this.model.ngrams.bigrams[bigramPrefix][words[i + 1]] ||
						0) + 1;
			}

			if (i < words.length - 2) {
				const trigramPrefix = `${words[i]} ${words[i + 1]}`;
				this.model.ngrams.trigrams[trigramPrefix] =
					this.model.ngrams.trigrams[trigramPrefix] || {};
				this.model.ngrams.trigrams[trigramPrefix][words[i + 2]] =
					(this.model.ngrams.trigrams[trigramPrefix][words[i + 2]] ||
						0) + 1;
			}

			if (i < words.length - 3) {
				const quadgramPrefix = `${words[i]} ${words[i + 1]} ${
					words[i + 2]
				}`;
				this.model.ngrams.quadgrams[quadgramPrefix] =
					this.model.ngrams.quadgrams[quadgramPrefix] || {};
				this.model.ngrams.quadgrams[quadgramPrefix][words[i + 3]] =
					(this.model.ngrams.quadgrams[quadgramPrefix][
						words[i + 3]
					] || 0) + 1;
			}
		}

		// Chunk sequences
		if (chunks.length > 0) {
			const chunkSequence = chunks.join("->");
			this.model.ngrams.chunkSequences[chunkSequence] =
				(this.model.ngrams.chunkSequences[chunkSequence] || 0) + 1;
		}
	}

	private analyzeGrammarPatterns(): void {
		this.model.sentences.forEach((sentence) => {
			const pattern = sentence.grammaticalTemplate;
			this.model.ngrams.grammarPatterns[pattern] =
				(this.model.ngrams.grammarPatterns[pattern] || 0) + 1;
		});
		this.model.stats.grammarPatterns = Object.keys(
			this.model.ngrams.grammarPatterns
		).length;
	}

	private calculateNgramProbabilities(): void {
		// Normalize word ngrams
		this.normalizeNgrams(this.model.ngrams.unigrams);
		this.normalizeNgramLevel(this.model.ngrams.bigrams);
		this.normalizeNgramLevel(this.model.ngrams.trigrams);
		this.normalizeNgramLevel(this.model.ngrams.quadgrams);

		// Normalize chunk sequences
		const totalChunks = Object.values(
			this.model.ngrams.chunkSequences
		).reduce((a, b) => a + b, 0);
		for (const seq in this.model.ngrams.chunkSequences) {
			this.model.ngrams.chunkSequences[seq] /= totalChunks;
		}

		// Normalize grammar patterns
		const totalPatterns = Object.values(
			this.model.ngrams.grammarPatterns
		).reduce((a, b) => a + b, 0);
		for (const pattern in this.model.ngrams.grammarPatterns) {
			this.model.ngrams.grammarPatterns[pattern] /= totalPatterns;
		}
	}

	private normalizeNgrams(ngrams: { [key: string]: number }): void {
		const total = Object.values(ngrams).reduce((a, b) => a + b, 0);
		for (const key in ngrams) {
			ngrams[key] /= total;
		}
	}

	private normalizeNgramLevel(ngrams: {
		[prefix: string]: { [next: string]: number };
	}): void {
		for (const prefix in ngrams) {
			const total = Object.values(ngrams[prefix]).reduce(
				(a, b) => a + b,
				0
			);
			for (const next in ngrams[prefix]) {
				ngrams[prefix][next] /= total;
			}
		}
	}

	public generateSentence(): string {
		let attempts = 0;
		while (attempts < 10) {
			attempts++;

			// Select a grammatical pattern
			const pattern = this.selectWeightedRandom(
				Object.entries(this.model.ngrams.grammarPatterns)
			);

			const generatedWords: WordEntry[] = [];
			const roles = pattern.split("->");
			let context: string[] = [];

			for (const role of roles) {
				const candidates = Object.values(this.model.words).filter(
					(word) =>
						word.grammaticalRole === role ||
						(role === "other" && !word.grammaticalRole)
				);

				if (candidates.length === 0) break;

				const filtered = this.filterByContext(candidates, context);
				const validCandidates =
					filtered.length > 0 ? filtered : candidates;
				const selected = this.selectWithContext(
					validCandidates,
					context
				);

				generatedWords.push(this.model.words[selected]);
				context.push(selected);

				if (context.length > this.ngramSize - 1) {
					context = context.slice(-(this.ngramSize - 1));
				}
			}

			if (generatedWords.length >= this.minSentenceLength) {
				const corrected = this.applyGrammarCorrections(generatedWords);
				return this.formatSentence(corrected);
			}
		}

		return this.generateFallbackSentence();
	}

	private applyGrammarCorrections(words: WordEntry[]): WordEntry[] {
		const corrected: WordEntry[] = [];

		for (let i = 0; i < words.length; i++) {
			let current = words[i];

			// Apply subject-verb agreement
			if (i > 0 && current.tags.includes("Verb")) {
				const prev = corrected[i - 1] || words[i - 1];
				if (
					prev.tags.includes("Noun") &&
					prev.tags.includes("Subject")
				) {
					current = this.grammarEnforcer.enforceSubjectVerbAgreement(
						prev,
						current
					);
				}
			}

			// Apply determiner-noun agreement
			if (i > 0 && current.tags.includes("Determiner")) {
				const next = words[i + 1];
				if (next?.tags.includes("Noun")) {
					current =
						this.grammarEnforcer.enforceDeterminerNounAgreement(
							current,
							next
						);
				}
			}

			corrected.push(current);
		}

		return corrected;
	}

	private filterByContext(
		candidates: WordEntry[],
		context: string[]
	): WordEntry[] {
		if (context.length === 0) return candidates;

		return candidates.filter((word) => {
			// Check all relevant ngram levels
			if (context.length >= 3 && this.ngramSize >= 4) {
				const quadPrefix = context.slice(-3).join(" ");
				const quadProb =
					this.model.ngrams.quadgrams[quadPrefix]?.[
						word.normalized
					] || 0;
				if (quadProb > 0.05) return true;
			}

			if (context.length >= 2 && this.ngramSize >= 3) {
				const triPrefix = context.slice(-2).join(" ");
				const triProb =
					this.model.ngrams.trigrams[triPrefix]?.[word.normalized] ||
					0;
				if (triProb > 0.05) return true;
			}

			if (context.length >= 1 && this.ngramSize >= 2) {
				const biPrefix = context[context.length - 1];
				const biProb =
					this.model.ngrams.bigrams[biPrefix]?.[word.normalized] || 0;
				if (biProb > 0.05) return true;
			}

			return false;
		});
	}

	private selectWithContext(
		candidates: WordEntry[],
		context: string[]
	): string {
		const scored = candidates.map((word) => {
			let score = word.frequency;

			if (context.length >= 3 && this.ngramSize >= 4) {
				const quadPrefix = context.slice(-3).join(" ");
				score +=
					(this.model.ngrams.quadgrams[quadPrefix]?.[
						word.normalized
					] || 0) * 1000;
			}

			if (context.length >= 2 && this.ngramSize >= 3) {
				const triPrefix = context.slice(-2).join(" ");
				score +=
					(this.model.ngrams.trigrams[triPrefix]?.[word.normalized] ||
						0) * 500;
			}

			if (context.length >= 1 && this.ngramSize >= 2) {
				const biPrefix = context[context.length - 1];
				score +=
					(this.model.ngrams.bigrams[biPrefix]?.[word.normalized] ||
						0) * 100;
			}

			return { id: word.id, score };
		});

		return this.selectWeightedRandom(
			scored.map(({ id, score }) => [id, score])
		);
	}

	private selectWeightedRandom<T>(items: [T, number][]): T {
		const total = items.reduce((sum, [_, weight]) => sum + weight, 0);
		let random = Math.random() * total;

		for (const [item, weight] of items) {
			random -= weight;
			if (random <= 0) return item;
		}

		return items[0][0];
	}

	private generateFallbackSentence(): string {
		// Try to find a high-frequency grammatical pattern
		const frequentPatterns = Object.entries(
			this.model.ngrams.grammarPatterns
		)
			.sort((a, b) => b[1] - a[1])
			.slice(0, 5);

		if (frequentPatterns.length > 0) {
			const pattern = frequentPatterns[0][0];
			const roles = pattern.split("->");
			const words: string[] = [];

			for (const role of roles) {
				const candidates = Object.values(this.model.words).filter(
					(word) => word.grammaticalRole === role
				);

				if (candidates.length > 0) {
					const selected =
						candidates[
							Math.floor(Math.random() * candidates.length)
						];
					words.push(selected.text);
				}
			}

			if (words.length > 0) {
				return this.formatSentence(words);
			}
		}

		// Ultimate fallback
		return "The system generated a sentence.";
	}

	private formatSentence(words: WordEntry[] | string[]): string {
		const text = Array.isArray(words)
			? words.map((w) => (typeof w === "string" ? w : w.text)).join(" ")
			: words;

		return text
			.replace(/\s+([.,!?])/g, "$1")
			.replace(/([^.])$/, "$1.")
			.replace(/^./, (m) => m.toUpperCase());
	}

	public generateParagraph(sentenceCount: number = 5): string {
		const sentences: string[] = [];
		let attempts = 0;

		while (
			sentences.length < sentenceCount &&
			attempts < sentenceCount * 3
		) {
			attempts++;
			const sentence = this.generateSentence();

			if (
				sentence.split(" ").length >= this.minSentenceLength &&
				sentence.split(" ").length <= this.maxSentenceLength
			) {
				sentences.push(sentence);
			}
		}

		return sentences.join(" ");
	}

	public saveModel(path: string): void {
		fs.writeFileSync(path, JSON.stringify(this.model, null, 2));
	}

	public loadModel(path: string): void {
		const data = fs.readFileSync(path, "utf-8");
		this.model = JSON.parse(data);
	}

	public getStats() {
		return {
			...this.model.stats,
			unigrams: Object.keys(this.model.ngrams.unigrams).length,
			bigrams: Object.keys(this.model.ngrams.bigrams).length,
			trigrams: Object.keys(this.model.ngrams.trigrams).length,
			quadgrams: Object.keys(this.model.ngrams.quadgrams).length,
			chunkSequences: Object.keys(this.model.ngrams.chunkSequences)
				.length,
		};
	}
}

class LLMSimulator extends ProfessionalTextGenerator {
	private contextWindow: string[];
	private attentionWeights: { [key: string]: number };
	private temperature: number;
	private maxContextLength: number;

	constructor(
		ngramSize: number = 4,
		maxContextLength: number = 2048,
		temperature: number = 0.7
	) {
		super(ngramSize);
		this.contextWindow = [];
		this.attentionWeights = {};
		this.temperature = temperature;
		this.maxContextLength = maxContextLength;
	}

	// Simulate attention mechanism
	private calculateAttention(text: string): void {
		const tokens = text.split(" ");
		tokens.forEach((token) => {
			this.attentionWeights[token] =
				(this.attentionWeights[token] || 0) + 1;
		});
	}

	// Simulate transformer's positional encoding
	private getPositionalWeight(position: number): number {
		return 1 / Math.log(position + 2); // Simulates decreasing attention with distance
	}

	// Get candidate tokens from ngram model
	private getNgramCandidates(context: string): { [token: string]: number } {
		const candidates: { [token: string]: number } = {};

		// Use the last 1-3 words as context depending on ngramSize
		const contextWords = context.split(" ").slice(-(this.ngramSize - 1));

		// Check quadgrams if we have enough context
		if (contextWords.length >= 3 && this.ngramSize >= 4) {
			const prefix = contextWords.slice(-3).join(" ");
			const quadgramProbs = this.model.ngrams.quadgrams[prefix] || {};
			Object.entries(quadgramProbs).forEach(([token, prob]) => {
				candidates[token] = (candidates[token] || 0) + prob;
			});
		}

		// Check trigrams
		if (contextWords.length >= 2 && this.ngramSize >= 3) {
			const prefix = contextWords.slice(-2).join(" ");
			const trigramProbs = this.model.ngrams.trigrams[prefix] || {};
			Object.entries(trigramProbs).forEach(([token, prob]) => {
				candidates[token] = (candidates[token] || 0) + prob * 0.5; // Lower weight than quadgrams
			});
		}

		// Check bigrams
		if (contextWords.length >= 1 && this.ngramSize >= 2) {
			const prefix = contextWords[contextWords.length - 1];
			const bigramProbs = this.model.ngrams.bigrams[prefix] || {};
			Object.entries(bigramProbs).forEach(([token, prob]) => {
				candidates[token] = (candidates[token] || 0) + prob * 0.3; // Lower weight than trigrams
			});
		}

		// Fallback to unigrams
		if (Object.keys(candidates).length === 0) {
			Object.entries(this.model.ngrams.unigrams).forEach(
				([token, prob]) => {
					candidates[token] = prob * 0.1; // Lowest weight
				}
			);
		}

		return candidates;
	}

	// Select token from weighted candidates
	private selectToken(candidates: { [token: string]: number }): string {
		const entries = Object.entries(candidates);
		const totalWeight = entries.reduce(
			(sum, [_, weight]) => sum + weight,
			0
		);
		let random = Math.random() * totalWeight;

		for (const [token, weight] of entries) {
			random -= weight;
			if (random <= 0) {
				return token;
			}
		}

		return entries[0][0]; // Fallback to first token
	}

	// Enhanced context-aware generation
	public generateWithPrompt(prompt: string, maxTokens: number = 50): string {
		this.updateContextWindow(prompt);
		this.calculateAttention(prompt);

		let output = "";
		let tokensGenerated = 0;
		let lastToken = prompt.split(" ").slice(-1)[0] || "";

		while (tokensGenerated < maxTokens) {
			const nextToken = this.generateNextToken(lastToken);
			output += nextToken + " ";
			lastToken = nextToken;
			tokensGenerated++;

			this.updateContextWindow(nextToken);
		}

		return this.postProcessOutput(prompt + output);
	}

	private generateNextToken(context: string): string {
		// Get candidates with probabilities
		const candidates = this.getNgramCandidates(context);

		// Apply temperature
		const scaledProbs = this.applyTemperature(candidates);

		// Select token
		return this.selectToken(scaledProbs);
	}

	private applyTemperature(candidates: { [token: string]: number }): {
		[token: string]: number;
	} {
		if (this.temperature === 0) {
			// Find the token with highest probability
			const maxEntry = Object.entries(candidates).reduce(
				(max, entry) => (entry[1] > max[1] ? entry : max),
				["", -Infinity]
			);
			return { [maxEntry[0]]: 1 }; // Return only the max probability token
		}

		if (this.temperature === 1) return candidates;

		const scaled: { [token: string]: number } = {};
		const sum = Object.values(candidates).reduce((a, b) => a + b, 0);

		Object.entries(candidates).forEach(([token, prob]) => {
			scaled[token] = Math.pow(prob / sum, 1 / this.temperature);
		});

		return scaled;
	}

	private updateContextWindow(token: string): void {
		this.contextWindow.push(...token.split(" "));
		while (this.contextWindow.length > this.maxContextLength) {
			this.contextWindow.shift();
		}
	}

	private postProcessOutput(text: string): string {
		// Basic cleanup
		return text
			.replace(/\s+([,.!?])/g, "$1") // Fix spacing before punctuation
			.replace(/\s+/g, " ") // Collapse multiple spaces
			.replace(/([^.])$/, "$1.") // Add final period if missing
			.replace(/^./, (m) => m.toUpperCase()) // Capitalize first letter
			.trim();
	}

	// Override parent's generateSentence to use LLM-style generation
	public generateSentence(): string {
		return this.generateWithPrompt("", 15);
	}
}

// Usage Example
const llm = new LLMSimulator(4, 1024, 0.7);
llm.processCorpus(paragraphs);

console.log("LLM-style Generation:");
console.log(llm.generateWithPrompt("The future of AI is ", 50));
console.log(llm.generateWithPrompt("Climate change will ", 30));

// Interactive simulation
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

function chat() {
	readline.question("You: ", (input: string) => {
		if (input.toLowerCase() === "exit") {
			readline.close();
			return;
		}

		const response = llm.generateWithPrompt(input, 30);
		console.log("AI:", response);
		chat();
	});
}

console.log('\nChat simulation (type "exit" to quit)');
chat();

// const generator = new ProfessionalTextGenerator(4, 5, 15);
// generator.processCorpus(paragraphs);
// generator.saveModel("professional-language-model.json");

// console.log("Generated Sentences:");
// for (let i = 0; i < 5; i++) {
// 	console.log(`${i + 1}. ${generator.generateSentence()}`);
// }

// console.log("\nGenerated Paragraph:");
// console.log(generator.generateParagraph());

// console.log("\nModel Statistics:");
// console.log(generator.getStats());