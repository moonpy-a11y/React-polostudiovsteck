import { useMemo, useState } from 'react';
import './App.css';

const zones = [
  {
    id: 'center',
    label: 'Center Line',
    title: 'Open Play',
    description: 'The ball is in open play with space to pass and drive.',
    tip: 'Classic polo rules reward teamwork and swift possession changes here.',
  },
  {
    id: 'penalty',
    label: 'Penalty 60',
    title: 'Penalty 60',
    description: 'Free hit awarded 60 yards from the goal after the defending side sent the ball over their own back line.',
    tip: 'Opponents must stay 30 yards back and the goal remains fully defended.',
  },
  {
    id: 'goal',
    label: 'Goal Line',
    title: 'Goal Line',
    description: 'The attack is closing in and the final pass can decide the rally.',
    tip: 'A disciplined finish is essential under the goal line.',
  },
  {
    id: 'defense',
    label: '40-Yard Line',
    title: 'Defensive Reset',
    description: 'The team is regrouping and looking to clear the line safely.',
    tip: 'A controlled clearance can prevent a dangerous counterattack.',
  },
];

const architectureLayers = [
  {
    title: 'Simulation Engine',
    description: 'Physics for horses, players, the ball, and collision resolution across each chukka.',
  },
  {
    title: 'Rule Engine',
    description: 'Handles fouls, penalties, possession changes, and goal validation without mixing UI state.',
  },
  {
    title: 'Realtime Sync',
    description: 'Authoritative server updates, client prediction, and interpolation keep the match smooth.',
  },
  {
    title: 'Production Ops',
    description: 'Analytics, replay capture, and match telemetry support live broadcasts and coaching workflows.',
  },
];

const initialEvents = [
  { id: 1, label: 'Kickoff', detail: 'Royal starts with possession', team: 'Royal' },
  { id: 2, label: 'Press', detail: 'Storm riders close the passing lane', team: 'Storm' },
];

function App() {
  const [royalScore, setRoyalScore] = useState(3);
  const [stormScore, setStormScore] = useState(2);
  const [selectedZone, setSelectedZone] = useState('center');
  const [status, setStatus] = useState('Chukka 4 • Open play • Momentum favors Royal');
  const [penaltyTrial, setPenaltyTrial] = useState(false);
  const [possession, setPossession] = useState('Royal');
  const [sequence, setSequence] = useState(12);
  const [matchLive, setMatchLive] = useState(false);
  const [events, setEvents] = useState(initialEvents);

  const currentZone = useMemo(() => zones.find((zone) => zone.id === selectedZone) ?? zones[0], [selectedZone]);

  const handleZoneSelect = (zoneId) => {
    const nextZone = zones.find((zone) => zone.id === zoneId) ?? zones[0];
    setSelectedZone(zoneId);
    setPenaltyTrial(zoneId === 'penalty');
    setPossession(zoneId === 'penalty' ? 'Royal' : 'Royal');
    setStatus(`${nextZone.title}: ${nextZone.description}`);
    setSequence((prev) => prev + 1);
  };

  const logEvent = (label, detail, team) => {
    setEvents((prev) => [{ id: Date.now(), label, detail, team }, ...prev].slice(0, 6));
  };

  const handleGoal = () => {
    if (penaltyTrial) {
      setRoyalScore((prev) => prev + 1);
      setStatus('Goal! The 60-yard penalty was converted with the defense still 30 yards back.');
      logEvent('Penalty Goal', 'Royal converts the 60-yard free hit', 'Royal');
      setSequence((prev) => prev + 1);
      return;
    }

    if (possession === 'Royal') {
      setRoyalScore((prev) => prev + 1);
      setStatus(`Goal! ${currentZone.title} attack converted by Royal.`);
      logEvent('Goal', `${currentZone.title} attack converted`, 'Royal');
    } else {
      setStormScore((prev) => prev + 1);
      setStatus(`Goal! ${currentZone.title} attack converted by Storm Riders.`);
      logEvent('Goal', `${currentZone.title} attack converted`, 'Storm');
    }

    setSequence((prev) => prev + 1);
  };

  const startMatch = () => {
    setMatchLive(true);
    setStatus('Match live • Royal pressing into the center line');
    logEvent('Match Start', 'Live play has begun', 'Royal');
  };

  const recordPlay = (label) => {
    if (!matchLive) {
      setStatus('Start the match before logging a play.');
      return;
    }

    const team = possession === 'Royal' ? 'Royal' : 'Storm';
    setStatus(`${label} • ${team} maintaining pressure`);
    logEvent(label, `${currentZone.title} play executed`, team);
    setSequence((prev) => prev + 1);
  };

  return (
    <div className="App">
      <main className="App-shell">
        <header className="hero-card">
          <div>
            <p className="eyebrow">Production-ready polo simulator</p>
            <h1>Royal Polo Studio</h1>
            <p className="hero-copy">
              This match cockpit sketches a real polo experience with the architecture for simulation, rules, camera control, and live match telemetry.
            </p>
          </div>
          <div className="hero-badge">Architecture Sketch</div>
        </header>

        <section className="scoreboard">
          <div className="team team-royal">
            <p className="team-label">Home</p>
            <h1>Royal</h1>
            <div className="score">{royalScore}</div>
          </div>

          <div className="match-center">
            <p className="rules">Classic Polo Rules</p>
            <h2>Royal vs Storm Riders</h2>
            <p className="status">{status}</p>
            <div className="action-row">
              <button className="goal-button" type="button" onClick={handleGoal}>
                Record Goal
              </button>
              <button className="secondary-button" type="button" onClick={startMatch}>
                {matchLive ? 'Match Live' : 'Start Match'}
              </button>
            </div>
          </div>

          <div className="team team-opponent">
            <p className="team-label">Away</p>
            <h1>Storm Riders</h1>
            <div className="score">{stormScore}</div>
          </div>
        </section>

        <section className="content-grid">
          <div className="pitch-card">
            <div className="pitch">
              <div className="goal goal-left" />
              <div className="goal goal-right" />
              <div className="ball" />
              <div className="player player-one" />
              <div className="player player-two" />
              <div className="player player-three" />
              <div className="pitch-label">Field state · {currentZone.title}</div>
            </div>

            <div className="stats-row">
              <div>
                <span className="stat-label">Possession</span>
                <strong>{possession}</strong>
              </div>
              <div>
                <span className="stat-label">Sequence</span>
                <strong>#{sequence}</strong>
              </div>
              <div>
                <span className="stat-label">Mode</span>
                <strong>{penaltyTrial ? 'Penalty Trial' : 'Open Play'}</strong>
              </div>
            </div>

            <div className="play-controls">
              <button className="chip-button" type="button" onClick={() => recordPlay('Drive')}>
                Drive
              </button>
              <button className="chip-button" type="button" onClick={() => recordPlay('Pass')}>
                Pass
              </button>
              <button className="chip-button" type="button" onClick={() => recordPlay('Tackle')}>
                Tackle
              </button>
            </div>

            <div className="events-card">
              <div className="events-header">
                <h3>Live event feed</h3>
                <span>{matchLive ? 'Match live' : 'Ready to start'}</span>
              </div>
              <ul>
                {events.map((event) => (
                  <li key={event.id}>
                    <strong>{event.label}</strong>
                    <span>{event.detail}</span>
                    <em>{event.team}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="side-panel">
            <div className="panel-block">
              <h3>Playbook</h3>
              <div className="zone-buttons">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    type="button"
                    className={`zone-button ${selectedZone === zone.id ? 'active' : ''}`}
                    onClick={() => handleZoneSelect(zone.id)}
                  >
                    {zone.label}
                  </button>
                ))}
              </div>

              <div className="zone-detail">
                <h4>{currentZone.title}</h4>
                <p>{currentZone.description}</p>
                <p className="zone-tip">{currentZone.tip}</p>
                {penaltyTrial ? (
                  <div className="penalty-trial">
                    <p>Trial setup: attacking team takes a free hit from 60 yards out.</p>
                    <p>Defenders hold station at least 30 yards from the ball.</p>
                    <p>The goal stays fully defended, so accuracy and placement matter.</p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="panel-block">
              <h3>Architecture layers</h3>
              <div className="layer-list">
                {architectureLayers.map((layer) => (
                  <article key={layer.title} className="layer-card">
                    <h4>{layer.title}</h4>
                    <p>{layer.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
