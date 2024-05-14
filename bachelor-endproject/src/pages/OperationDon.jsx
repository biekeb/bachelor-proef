import React from "react";

const EvidenceScreen = () => {
  return (
    <div className="EvidenceScreen">
      <h1>OPERATION DON</h1>

      <button>
        <a href="/suspects">inspect suspects</a>
      </button>
      <button>
        <a href="/screen"> Inspect murderscene</a>
      </button>
      <button>
        <a href="/examine"> Examine evidence</a>
      </button>

      <p>
        On the above date and time, officers responded to a report of gunfire in
        the back alley of nightclub The Den. Upon arrival at the scene, officers
        discovered the lifeless body of Don Moretti, a prominent figure in the
        city's Mafia underworld, lying in the alley behind the establishment.
        The victim appeared to have sustained multiple gunshot wounds to the
        chest and abdomen, consistent with a targeted attack.
      </p>
    </div>
  );
};

export default EvidenceScreen;
