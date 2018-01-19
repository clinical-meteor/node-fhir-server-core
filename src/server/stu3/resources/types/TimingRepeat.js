const Element = require('./Element');
const Code = require('./Code');
const Period = require('./Period');
const Range = require('./Range');

// Σ		Element	A timing schedule that specifies an event that may occur multiple times
class TimingRepeat extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// bounds[x]	Σ	0..1		Length/Range of lengths, or (Start and/or end) limits
	// boundsDuration			Duration
	set boundsDuration(boundsDuration) {
		this._boundsDuration = boundsDuration;
	}

	get boundsDuration() {
		return this._boundsDuration;
	}

	// boundsRange			Range
	set boundsRange(boundsRange) {
		this._boundsRange = new Range(boundsRange);
	}

	get boundsRange() {
		return this._boundsRange;
	}

	//  boundsPeriod			Period
	set boundsPeriod(boundsPeriod) {
		this._boundsPeriod = new Period(boundsPeriod);
	}

	get boundsPeriod() {
		return this._boundsPeriod;
	}

	// count	Σ	0..1	integer	Number of times to repeat
	set count(count) {
		this._count = count;
	}

	get count() {
		return this._count;
	}

	// countMax	Σ	0..1	integer	Maximum number of times to repeat
	set countMax(countMax) {
		this._countMax = countMax;
	}

	get countMax() {
		return this._countMax;
	}

	// duration	Σ I	0..1	decimal	How long when it happens
	// duration SHALL be a non-negative value
	set duration(duration) {
		this._duration = duration;
	}

	get duration() {
		return this._duration;
	}

	// durationMax	Σ	0..1	decimal	How long when it happens (Max)
	set durationMax(durationMax) {
		this._durationMax = durationMax;
	}

	get durationMax() {
		return this._durationMax;
	}

	// durationUnit	Σ	0..1	code	s | min | h | d | wk | mo | a - unit of time (UCUM)
	//UnitsOfTime (Required)
	set durationUnit(durationUnit) {
		this._durationUnit = new Code(durationUnit);
	}

	get durationUnit() {
		return this._durationUnit;
	}


	// frequency	Σ	0..1	integer	Event occurs frequency times per
	set frequency(frequency) {
		this._frequency = frequency;
	}

	get frequency() {
		return this._frequency;
	}

	// frequencyMax	Σ	0..1	integer	Event occurs up to frequencyMax times per period
	set frequencyMax(frequencyMax) {
		this._frequencyMax = frequencyMax;
	}

	get frequencyMax() {
		return this._frequencyMax;
	}

	// period	Σ I	0..1	decimal	Event occurs frequency times per period
	// period SHALL be a non-negative value
	set period(period) {
		this._period = period;
	}

	get period() {
		return this._period;
	}

	// periodMax	Σ	0..1	decimal	Upper limit of period (3-4 hours)
	set periodMax(periodMax) {
		this._periodMax = periodMax;
	}

	get periodMax() {
		return this._periodMax;
	}

	// periodUnit	Σ	0..1	code	s | min | h | d | wk | mo | a - unit of time (UCUM)
	// UnitsOfTime (Required)
	set periodUnit(periodUnit) {
		this._periodUnit = new Code(periodUnit);
	}

	get periodUnit() {
		return this._periodUnit;
	}

	// dayOfWeek	Σ	0..*	code	mon | tue | wed | thu | fri | sat | sun
	// DaysOfWeek (Required)
	set dayOfWeek(dayOfWeek) {
		if (Array.isArray(dayOfWeek)) {
			this._dayOfWeek = dayOfWeek.map((x) => new Code(x));
		} else {
			this._dayOfWeek = [new Code(dayOfWeek)];
		}
	}

	get dayOfWeek() {
		return this._dayOfWeek;
	}

	// timeOfDay	Σ	0..*	time	Time of day for action
	set timeOfDay(timeOfDay) {
		this._timeOfDay = [].concat(timeOfDay);
	}

	get timeOfDay() {
		return this._timeOfDay;
	}

	// when	Σ	0..*	code	Regular life events the event is tied to
	// EventTiming (Required)
	set when(when) {
		if (Array.isArray(when)) {
			this._when = when.map((x) => new Code(x));
		} else {
			this._when = [new Code(when)];
		}
	}

	get when() {
		return this._when;
	}

	// offset	Σ	0..1	unsignedInt	Minutes from event (before or after)
	set offset(offset) {
		this._offset = offset;
	}

	get offset() {
		return this._offset;
	}

	toJSON() {
		const json = {
			boundsDuration: this.boundsDuration,
			boundsRange: this._boundsRange,
			boundsPeriod: this._boundsPeriod,
			count: this._count,
			countMax: this._countMax,
			duration: this._duration,
			durationMax: this._durationMax,
			durationUnit: this._durationUnit,
			frequency: this._frequency,
			frequencyMax: this._frequencyMax,
			period: this._period,
			periodMax: this._periodMax,
			periodUnit: this._periodUnit,
			dayOfWeek: this._dayOfWeek,
			timeOfDay: this._timeOfDay,
			when: this._when,
			offset: this._offset
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = TimingRepeat;
