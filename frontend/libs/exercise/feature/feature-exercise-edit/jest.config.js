module.exports = {
  name: 'feature-exercise-edit',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/exercise/feature/feature-exercise-edit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
