// Changes the Carbon Monoxide colour accordingly.
export const carbonmonoxidecolour = (value) => {
  if (value <= 4400) {
    return "good";
  } else if (value > 4400 && value <= 9400) {
    return "fair";
  } else if (value > 9400 && value <= 12400) {
    return "moderate";
  } else if (value > 12400 && value < 15400) {
    return "poor";
  } else if (value >= 15400) {
    return "verypoor";
  }
};

// Changes the nitrogen dioxide colour accordingly.
export const nitrogendioxidecolour = (value) => {
  if (value <= 40) {
    return "good";
  } else if (value > 40 && value <= 70) {
    return "fair";
  } else if (value > 70 && value <= 150) {
    return "moderate";
  } else if (value > 150 && value < 200) {
    return "poor";
  } else if (value >= 200) {
    return "verypoor";
  }
};

// Changes the ozone colour accordingly.
export const ozonecolour = (value) => {
  if (value <= 60) {
    return "good";
  } else if (value > 60 && value <= 100) {
    return "fair";
  } else if (value > 100 && value <= 140) {
    return "moderate";
  } else if (value > 140 && value < 180) {
    return "poor";
  } else if (value >= 180) {
    return "verypoor";
  }
};

// Changes the sulphurdioxide colour accordingly.
export const sulphurdioxidecolour = (value) => {
  if (value <= 20) {
    return "good";
  } else if (value > 20 && value <= 80) {
    return "fair";
  } else if (value > 80 && value <= 250) {
    return "moderate";
  } else if (value > 250 && value < 350) {
    return "poor";
  } else if (value >= 350) {
    return "verypoor";
  }
};

// Changes the fine particles matter colour accordingly.
export const fineparticlesmattercolour = (value) => {
  if (value <= 10) {
    return "good";
  } else if (value > 10 && value <= 25) {
    return "fair";
  } else if (value > 25 && value <= 50) {
    return "moderate";
  } else if (value > 50 && value < 75) {
    return "poor";
  } else if (value >= 75) {
    return "verypoor";
  }
};

// Changes the coarse particulate matter colour accordingly.
export const coarseparticulatemattercolour = (value) => {
  if (value <= 20) {
    return "good";
  } else if (value > 20 && value <= 50) {
    return "fair";
  } else if (value > 50 && value <= 100) {
    return "moderate";
  } else if (value > 100 && value < 200) {
    return "poor";
  } else if (value >= 200) {
    return "verypoor";
  }
};

export const overallcolour = (value) => {
  if (value == 1) {
    return "good";
  } else if (value == 2) {
    return "fair";
  } else if (value == 3) {
    return "moderate";
  } else if (value == 4) {
    return "poor";
  } else if (value == 5) {
    return "verypoor";
  }
};
