import React, { Component } from 'react';

import { ReactComponent as Aries } from '../../icons/aries.svg';
import { ReactComponent as Taurus } from '../../icons/taurus.svg';
import { ReactComponent as Gemini } from '../../icons/gemini.svg';
import { ReactComponent as Cancer } from '../../icons/cancer.svg';
import { ReactComponent as Leo } from '../../icons/leo.svg';
import { ReactComponent as Virgo } from '../../icons/virgo.svg';
import { ReactComponent as Libra } from '../../icons/libra.svg';
import { ReactComponent as Scorpio } from '../../icons/scorpio.svg';
import { ReactComponent as Sagittarius } from '../../icons/sagittarius.svg';
import { ReactComponent as Capricorn } from '../../icons/capricorn.svg';
import { ReactComponent as Aquarius } from '../../icons/aquarius.svg';
import { ReactComponent as Pisces } from '../../icons/pisces.svg';

class MarsNatal extends Component {
    render() {
        return (
            <>
                <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>Mars in Aries people are impulsive and quick to take action.
                        They have a quick temper and lose control for a short time.
                        They are all about fresh starts and are always looking for something new.</p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Mars in Taurus’ goals are long term and achieved at a slow and steady pace.
                        Once they have a goal in mind they are determined to reach it, but are not concerned with how long it may take.
                        Getting a Mars Taurus to change their mind is near impossible, especially if it will go against their comfortable nature.</p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>Mars in Gemini folks are full of energy and need to keep themselves busy to avoid becoming too restless and anxious.
                        This placement is rather scattered and unfocused.
                        When angered, Gemini Mars’ words are their main weapon. They tend to have a nervous and restless energy.</p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>This placement is often associated with passive aggression.
                        Defenses are high if feeling threatened, not unlike a crab retreating into itself for protection.
                        They will not typically confront directly, and are slower to make decisions.</p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>Mars Leos like to take risks.
                        Their actions are powerful and their ambitions are clearly defined and reachable.
                        This placement is also highly sexual but love and romance are required for intimacy.
                        This placement loves to create, and express themselves.</p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>Mars in Virgo makes for excellent multitaskers.
                        They can become a little scatter brained when they have so many things on their plate,
                        but their practicality and organization helps them get it all done efficiently.
                        This is placement is not very aggressive. If annoyed, they will tend to complain a lot.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Mars in Libra are not known for their decisiveness.
                        They take their time in making a decision and try to think it through completely.
                        Rather than jumping head first into a conflict, Mars Libras will try to first find a more peaceful solution and defuse the situation before it gets out of hand.
                        Similar to Cancer Mars,
                        Libra Mars folk are also associated with passive aggression.</p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>This placement loves challenges.
                        Mars in Scorpio will take any challenge and through awesome willpower, reach feats once thought impossible.
                        They believe in their opinions strongly, and are seldom able to see others’ perspectives.
                        They will constantly test their limits.
                        This placement can sometimes resort to manipulation when trying to reach their goals.</p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>Mars in Sagittarius people are generally active.
                        They will use physical activity to get their emotions out.
                        They will likely try to avoid and ignore issues at hand. This placement may also start many projects but seldom finish them.
                        They like friendly debates, but the can get out of hand sometimes.</p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Mars Capricorns are driven by success.
                        They have long term goals and ambitions and will do everything they can to reach them.
                        They have incredible self control over their emotions and will not let things like anger overcome them.
                        They keep a level head when in conflict.
                        This placement can sometimes resort to bottling emotions, causing trouble for them later.</p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>Mars in Aquarius folk pride themselves on their individuality.
                        They hate to feel trapped and will rebel if they feel it happening.
                        Aquarius is a fixed sign, so they have a notorious stubborn streak.
                        They want everyone to side with them but will never actually try to change someone into something they’re not.</p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>Mars in Pisces people rarely take action themselves.
                        They would rather let things happen on their own.
                        They will not typically stand up for themselves, but they will do what they can to help others.
                        This placement likes to express themselves through creativity. Their energy levels are ever fluctuating.</p>
                </div>
            </>
        )
    }
}

export default MarsNatal;